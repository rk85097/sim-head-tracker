import Utils from './Utils'

const POS_FILTER_COUNT = 35
const CALIB_FILTER_COUNT = 15
const MIN_SCORE = 0.7

export default class KeyPoint {
  constructor () {
    this.initPosition = null
    this.filterQueue = []
    this.calibQueue = []
    this.isReady = false
    this.isCalibrated = false
    this.rawPosition = null
  }

  updateRaw (raw) {
    if (raw.score < MIN_SCORE) {
      return
    }
    this.raw = raw
    this.part = raw.part
    this.rawPosition = raw.position
    this.smoothPosition = raw.position
    this.calibrate()
  }

  get smoothPos () {
    if (this.filterQueue.length > POS_FILTER_COUNT) {
      this.isReady = true
      this.filterQueue.shift()
    }
    if (this.rawPosition !== null) {
      this.filterQueue.push(this.rawPosition)
    }
    return Utils.avgPoints(this.filterQueue)
  }

  set smoothPos (val) {
    this.smoothPosition = val
  }

  calibrate () {
    if (this.initPosition === null && this.filterQueue.length > POS_FILTER_COUNT) {
      if (this.calibQueue.length <= CALIB_FILTER_COUNT) {
        this.calibQueue.push(this.smoothPos)
      } else {
        this.initPosition = Utils.avgPoints(this.calibQueue)
        this.isCalibrated = true
      }
    }
  }

  reset () {
    this.isReady = false
    this.isCalibrated = false
    this.filterQueue = []
    this.calibQueue = []
    this.initPosition = null
  }

  drawPoint (ctx) {
    ctx.strokeStyle = 'white'
    ctx.beginPath()
    ctx.arc(this.smoothPos.x, this.smoothPos.y, 5, 0, 2 * Math.PI)
    ctx.stroke()
  }
}
