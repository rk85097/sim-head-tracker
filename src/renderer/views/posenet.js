/* eslint-disable */

// import ml5 from 'ml5'
import Pose from '../store/models/PoseModel'
import UDPClient from '../store/models/UdpClient'

import '@tensorflow/tfjs-node'
import * as faceapi from 'face-api.js'

const PITCH_DATAREF = new Buffer.from('sim/graphics/view/pilots_head_the')
const ROLL_DATAREF = new Buffer.from('sim/graphics/view/pilots_head_psi')
const YAW_DATAREF = new Buffer.from('sim/graphics/view/pilots_head_phi')

const UDP = new UDPClient(49000 ,'10.100.102.8')

const POSENET_FREQ = 100
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
  video: true
}

export default function run () {

  let pose

  const VIDEO_ELEMENT = document.getElementById('video')
  const CANVAS_ELEMENT = document.getElementById('canvas')
  const CANVAS_CTX = CANVAS_ELEMENT.getContext('2d', { alpha: true })
  // const poseNet = ml5.poseNet(modelReady, POSENET_OPTIONS)

  async function setMediaSource () {
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices.getUserMedia(VIDEO_OPTIONS).then(stream => {
        VIDEO_ELEMENT.srcObject = stream
        VIDEO_ELEMENT.play()
      }).catch((err) => {
        alert(err)
      })
    }
  }

  (async () => {
  console.log('1')

    await faceapi.nets.ssdMobilenetv1.loadFromDisk('/Users/roykronenfeld/Desktop/weights')
    await faceapi.nets.faceLandmark68TinyNet.loadFromDisk('/Users/roykronenfeld/Desktop/weights')
    // await faceapi.loadTinyFaceDetectorModel('./models')
    // await faceapi.loadMtcnnModel('./models')
    // await faceapi.loadFaceLandmarkModel('./models')
    // await faceapi.loadFaceLandmarkTinyModel('./models')
    // await faceapi.loadFaceRecognitionModel('./models')
    // console.log('2')

    faceapi.env.monkeyPatch({
      Canvas: HTMLCanvasElement,
      Image: HTMLImageElement,
      ImageData: ImageData,
      Video: HTMLVideoElement,
      createCanvasElement: () => document.createElement('canvas'),
      createImageElement: () => document.createElement('img')
    })
    console.log('3')

    


  })();

 
  async function runFaceAPI() {
    console.log('2')
    setInterval(async () => {
      const detections2 = await faceapi.detectAllFaces(VIDEO_ELEMENT, new faceapi.TinyFaceDetectorOptions())
      console.log(detections2)
    }, 500);
  }

  async function onDraw () {

    window.requestAnimationFrame(onDraw)

    if (pose) {
      pose.initKeyPoints()
    }

    CANVAS_CTX.clearRect(0, 0, CANVAS_ELEMENT.width, CANVAS_ELEMENT.height)

    
    var inf = await faceapi.detectAllFaces(VIDEO_ELEMENT).withFaceLandmarks(true)

    const a = inf[0].landmarks.positions[46]
    const b = inf[0].landmarks.positions[41]
    const c = inf[0].landmarks.positions[33]



    const newPose = {
      score: 1, keypoints: [{score: 1, part: 'nose', position: c}, {score: 1, part: 'leftEye', position: a},{score: 1, part: 'rightEye', position: b}]
    }

    if (pose) {
      pose.updateRaw(newPose)
    } else {
      pose = new Pose(newPose, CANVAS_CTX)
    }
    
    pose.position()
     
    
  }

  setInterval(async () => {
    // CANVAS_CTX.clearRect(0, 0, CANVAS_ELEMENT.width, CANVAS_ELEMENT.height)

    
    // var inf = await faceapi.detectAllFaces(VIDEO_ELEMENT).withFaceLandmarks(true)

    // const a = inf[0].landmarks.positions[46]
    // const b = inf[0].landmarks.positions[41]
    // const c = inf[0].landmarks.positions[33]



    // const newPose = {
    //   score: 1, keypoints: [{score: 1, part: 'nose', position: c}, {score: 1, part: 'leftEye', position: a},{score: 1, part: 'rightEye', position: b}]
    // }

    // if (pose) {
    //   pose.updateRaw(newPose)
    // } else {
    //   pose = new Pose(newPose, CANVAS_CTX)
    // }
    
    // pose.position()


  }, 250);

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

  // poseNet.on('pose', function (poses) {
  //   if (poses && poses.length > 0) {
  //     const newPose = poses[0].pose
  //     if (pose) {
  //       pose.updateRaw(newPose)
  //     } else {
  //       pose = new Pose(newPose, CANVAS_CTX)
  //     }
  //   }
  // })

  setMediaSource()
  onDraw()
}
