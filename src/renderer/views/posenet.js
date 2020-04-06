/* eslint-disable */

import ml5 from 'ml5'
import Pose from '../store/models/PoseModel'
import UDPClient from '../store/models/UdpClient'

const PITCH_DATAREF = new Buffer.from('sim/graphics/view/pilots_head_the')
const ROLL_DATAREF = new Buffer.from('sim/graphics/view/pilots_head_psi')
const YAW_DATAREF = new Buffer.from('sim/graphics/view/pilots_head_phi')

const UDP = new UDPClient(49000 ,'10.100.102.14')

const INPUT_RESOLUTION = 417
const POSENET_FREQ = 250
const VIDEO_FRAMERATE = 4
const POSENET_OPTIONS = {
  imageScaleFactor: 0.3,
 outputStride: 16,
 flipHorizontal: false,
 minConfidence: 0.5,
 scoreThreshold: 0.5,
 nmsRadius: 20,
 detectionType: 'single',
 multiplier: 0.50,
}
const VIDEO_OPTIONS = {
  audio: false,
  video: { frameRate: 4, //{ ideal: 10, max: 10 },

  }
}

export default function run () {

  let pose

  const VIDEO_ELEMENT = document.getElementById('video')
  const CANVAS_ELEMENT = document.getElementById('canvas')
  const CANVAS_CTX = CANVAS_ELEMENT.getContext('2d', { alpha: true })
  const poseNet = ml5.poseNet(modelReady, POSENET_OPTIONS)

  function setMediaSource () {
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
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
    const isPoseValid = pose && pose.isPoseValid()
    if (!isPoseValid) {
      return
    }
    pose.initKeyPoints()
    sendToSim(pose.position())
  }

  function sendToSim(position) {
    UDP.send(PITCH_DATAREF, position.pitch)
    UDP.send(YAW_DATAREF, position.roll)
    UDP.send(ROLL_DATAREF, position.yaw)
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
        pose = new Pose(newPose, CANVAS_CTX)
      }
    }
  })

  setMediaSource()
  onDraw()
}
