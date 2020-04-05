import Utils from './Utils'
import KeyPoint from './KeyPointModel'

const MIN_SCORE = 0.3
const FACE_MAX_DIST = 35
const RELEVANT_KEYPOINTS = ['leftEye', 'rightEye', 'nose']

export default class Pose {
  constructor (raw, shouldDrawPose, ctx) {
    this.score = raw.score
    this.rawKeypoints = raw.keypoints
    this.uprightKeyPoints = []
    this.shouldDrawPose = false
    this.ctx = ctx
    this.polygonHeightInit = null
  }

  position() {
    return {
      ... position(),
      x: this.x(),
      y: this.y(),
      z: this.z()
    }
  }

  initKeyPoints () {
    this.rawKeypoints.filter((kp) => { return RELEVANT_KEYPOINTS.includes(kp.part) }).forEach(kp => {
      if (this.uprightKeyPoints.filter((ekp) => { return ekp.part === kp.part }).length === 0) {
        this.uprightKeyPoints.push({part: kp.part, obj: new KeyPoint()})
      } else {
        this.updateKeyPoint(kp.part, kp)
      }
    })
  }

  updateRaw (raw) {
    this.score = raw.score
    this.rawKeypoints = raw.keypoints
    this.initKeyPoints()
  }

  getUprightKeyPoint (part) {
    return this.uprightKeyPoints.find(item =>  item.part === part)
  }

  updateKeyPoint (part, raw) {
    this.uprightKeyPoints.forEach(kp => {
      if (kp.part === part) {
        kp.obj.updateRaw(raw)
        if (this.shouldDrawPose) {
          kp.obj.drawPoint(this.ctx)
        }
      }
    })
  }

  isPoseValid () {
    let el = 0
    let er = 0
    for (let j = 0; j < this.rawKeypoints.length; j++) {
      let k = this.rawKeypoints[j]
      if (k.part === 'leftEye') {
        el = k.position
      } else if (k.part === 'rightEye') {
        er = k.position
      }
    }
    const condA = Utils.getDistance(el, er) > FACE_MAX_DIST
    const condB = this.score > MIN_SCORE
    const success = condA && condB
    return success
  }

  isCalibrating () {
    return !this.uprightKeyPoints.some((kp) => {
      return kp.obj.isCalibrated
    })
  }

  resetCalibration () {
    this.uprightKeyPoints.forEach(kp => {
      kp.obj.reset()
    })
  }

  position () {

    // Fetch points

    const le = this.getUprightKeyPoint('leftEye')
    const re = this.getUprightKeyPoint('rightEye')
    const no = this.getUprightKeyPoint('nose')

    // Validate

    if (!le || !re || !no) {
      return 0
    }

    // Face square

    const nose = no.obj.smoothPos
    const rightEye = re.obj.smoothPos
    const leftEye = le.obj.smoothPos
    const polygonHeight = Math.abs(rightEye.y -  nose.y)
    if (!this.polygonHeightInit) {
      this.polygonHeightInit = polygonHeight * 2
    }
    const angle = Math.atan2(rightEye.y - leftEye.y, rightEye.x - leftEye.x)
    const leftEyeBottom = { x: Math.sin(angle) * this.polygonHeightInit + leftEye.x , y: -Math.cos(angle) * this.polygonHeightInit + leftEye.y}
    
    // Nose

    const noseVerticalPoint = { x: Math.sin(angle) * -this.polygonHeightInit + nose.x , y: -Math.cos(angle) * -this.polygonHeightInit + nose.y}
    const noseHorizentalPoint = { x: -Math.cos(-angle) * this.polygonHeightInit + nose.x , y: Math.sin(-angle) * this.polygonHeightInit + nose.y}
    
    // Interception points between nose line and face square

    const widthIntersect = intersect(nose.x, nose.y, noseVerticalPoint.x, noseVerticalPoint.y, leftEye.x, leftEye.y, rightEye.x, rightEye.y)
    const heightIntersect = intersect(nose.x, nose.y, noseHorizentalPoint.x, noseHorizentalPoint.y, leftEye.x, leftEye.y, leftEyeBottom.x, leftEyeBottom.y)

    // Create pixel factor

    const pixelRangeMin = -90
    const pixelRangeMax = 90
    const pixelRange = pixelRangeMax - pixelRangeMin

    // Yaw

    const eyeHorizentalRange = leftEye.x - rightEye.x
    const yaw = (((widthIntersect.x - rightEye.x) * pixelRange) / eyeHorizentalRange) + pixelRangeMin

    // Pitch

    const eyeVerticalRange = leftEyeBottom.y - leftEye.y
    const pitch = (((heightIntersect.y - leftEye.y) * pixelRange) / eyeVerticalRange) + pixelRangeMin

    // Roll

    const roll = (rightEye.y - leftEye.y) / (rightEye.x - leftEye.x)

    // DRAW
    
    const facePolygon = [rightEye, leftEye, leftEyeBottom]  
    facePolygon.forEach((p, index) => {
      const nextP = facePolygon[index + 1]
      if (nextP) {
        this.ctx.beginPath()
        this.ctx.strokeStyle = 'yellow'
        this.ctx.moveTo(p.x, p.y)
        this.ctx.lineTo(facePolygon[index + 1].x, facePolygon[index + 1].y)
        this.ctx.stroke()
      }
    })
    
    const nosePolygon = [noseVerticalPoint, nose, noseHorizentalPoint]
    nosePolygon.forEach((p, index) => {
      const nextP = nosePolygon[index + 1]
      if (nextP) {
        this.ctx.beginPath()
        this.ctx.strokeStyle = 'yellow'
        this.ctx.moveTo(p.x, p.y)
        this.ctx.lineTo(nosePolygon[index + 1].x, nosePolygon[index + 1].y)
        this.ctx.stroke()
      }
    })

    this.ctx.beginPath()
    this.ctx.arc(widthIntersect.x, widthIntersect.y, 3, 0, 2 * Math.PI)
    this.ctx.stroke()
    this.ctx.fillStyle = 'white'
    this.ctx.fill()

    this.ctx.beginPath()
    this.ctx.arc(heightIntersect.x, heightIntersect.y, 3, 0, 2 * Math.PI)
    this.ctx.stroke()
    this.ctx.fillStyle = 'white'
    this.ctx.fill()

    console.log({ roll, yaw, pitch })

    return { roll, yaw, pitch }

  }

  x () {
    return 0
  }

  y () {
    return 0
  }

  z () {
    return 0
  }
}

function intersect(x1, y1, x2, y2, x3, y3, x4, y4) {
	if ((x1 === x2 && y1 === y2) || (x3 === x4 && y3 === y4)) {
		return false
	}
	let denominator = ((y4 - y3) * (x2 - x1) - (x4 - x3) * (y2 - y1))
	if (denominator === 0) {
		return false
	}
	let ua = ((x4 - x3) * (y1 - y3) - (y4 - y3) * (x1 - x3)) / denominator
	let ub = ((x2 - x1) * (y1 - y3) - (y2 - y1) * (x1 - x3)) / denominator
	if (ua < 0 || ua > 1 || ub < 0 || ub > 1) {
		return false
	}
	let x = x1 + ua * (x2 - x1)
	let y = y1 + ua * (y2 - y1)
	return {x, y}
}