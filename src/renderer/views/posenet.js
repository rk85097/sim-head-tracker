/* eslint-disable */

import ml5 from 'ml5'
import Pose from '../store/models/PoseModel'
var dgram = require('dgram');

const DEV_MODE = true
const INPUT_RESOLUTION = 417
const POSENET_FREQ = 250
const VIDEO_FRAMERATE = 25
const POSENET_OPTIONS = {
  inputResolution: INPUT_RESOLUTION,
  outputStride: 16,
  multiplier: 0.50,
}
const VIDEO_OPTIONS = {
  audio: false,
  video: { 
    frameRate: { 
      ideal: VIDEO_FRAMERATE, 
      max: VIDEO_FRAMERATE 
    },
    width: { 
      min: INPUT_RESOLUTION, 
      ideal: INPUT_RESOLUTION, 
      max: INPUT_RESOLUTION 
    },
    height: { 
      min: INPUT_RESOLUTION, 
      ideal: INPUT_RESOLUTION, 
      max: INPUT_RESOLUTION 
    }
  }
}
let pose

export function calibrate () {
  pose.resetCalibration()
}

export default function run () {

  const VIDEO_ELEMENT = document.getElementById('video')
  const CANVAS_ELEMENT = document.getElementById('canvas')
  const CANVAS_CTX = CANVAS_ELEMENT.getContext('2d', { alpha: true })
  const poseNet = ml5.poseNet(modelReady, POSENET_OPTIONS)

  function hasCameraPermission () {
    return new Promise((resolve) => {
      navigator.permissions.query({name: 'camera'}).then((permResponse) => {
        if (permResponse.state === 'granted') {
          resolve({cameraPermitted: true})
        } else {
          resolve({cameraPermitted: false, state: permResponse.state})
        }
      }).catch((error) => {
        resolve({cameraPermitted: false, state: 'error', error: error})
      })
    })
  }

  function setMediaSource () {
    if (hasCameraPermission() && navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices.getUserMedia(VIDEO_OPTIONS).then(stream => {
        VIDEO_ELEMENT.srcObject = stream
        VIDEO_ELEMENT.play()
      }).catch((err) => {
        alert(err)
      })
    }
  }

  function onDraw () {
    window.requestAnimationFrame(onDraw)
    CANVAS_CTX.clearRect(0, 0, CANVAS_ELEMENT.width, CANVAS_ELEMENT.height)
    uprightInit()
  }

  function modelReady () {
    setTimeout(() => {
      poseNet.singlePose(VIDEO_ELEMENT)
      modelReady()
    }, POSENET_FREQ)
  }

  poseNet.on('pose', function (poses) {
    if (poses && poses.length > 0) {
      const newPose = poses[0].pose
      if (pose) {
        pose.updateRaw(newPose)
      } else {
        pose = new Pose(newPose, DEV_MODE, CANVAS_CTX)
      }
    }
  })

  setMediaSource()
  onDraw()
}

function uprightInit () {
  const isPoseValid = pose && pose.isPoseValid()
  if (!isPoseValid) {
    return
  }
  pose.initKeyPoints()
  send(pose.position())
}

var client = dgram.createSocket('udp4')

const pitchDR = new Buffer.from('sim/graphics/view/pilots_head_the')
const rollDR = new Buffer.from('sim/graphics/view/pilots_head_psi')
const yawDR = new Buffer.from('sim/graphics/view/pilots_head_phi')

function send(position) {


  const prefix = [68,82,69,70,0]

  let pitchRunningIndex = 4
  let rollRunningIndex = 4
  let yawRunningInder = 4

  const farrPitch = new Float32Array(1)
  farrPitch[0] = -position.pitch
  const pitchVal = new Uint8Array(farrPitch.buffer)

  const farrRoll = new Float32Array(1)
  farrRoll[0] = -position.roll
  const rollVal = new Uint8Array(farrRoll.buffer)

  const farrYaw = new Float32Array(1)
  farrYaw[0] = -position.yaw
  const yawVal = new Uint8Array(farrYaw.buffer)

  pitchRunningIndex += pitchVal.length
  rollRunningIndex += rollVal.length
  yawRunningInder += yawVal.length

  pitchRunningIndex += pitchDR.length
  rollRunningIndex += yawDR.length
  yawRunningInder += rollDR.length

  const messagePitch = [...prefix, ...pitchVal, ...pitchDR]
  const messageRoll = [...prefix, ...rollVal, ...yawDR]
  const messageYaw = [...prefix, ...yawVal, ...rollDR]

  pitchRunningIndex++
  rollRunningIndex++
  yawRunningInder++

  for (let index = pitchRunningIndex; index <= 508; index++) {
    messagePitch[index] = 0    
  }
  for (let index = rollRunningIndex; index <= 508; index++) {
    messageRoll[index] = 0    
  }
  for (let index = yawRunningInder; index <= 508; index++) {
    messageYaw[index] = 0    
  }

  client.send(new Buffer(messagePitch), 49000, '10.100.102.8')
  client.send(new Buffer(messageRoll), 49000, '10.100.102.8')
  client.send(new Buffer(messageYaw), 49000, '10.100.102.8')
}
