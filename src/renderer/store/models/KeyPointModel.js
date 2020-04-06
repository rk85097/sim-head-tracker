import Utils from './Utils'

const POS_FILTER_COUNT = 35
const MIN_SCORE = 0.7

export default class KeyPoint {

  constructor () {
    this.filterQueue = []
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
  }

  get smoothPos () {
    if (this.filterQueue.length > POS_FILTER_COUNT) {
      this.isReady = true
      this.filterQueue.shift()
    }
    if (this.rawPosition !== null) {
      this.filterQueue.push(this.rawPosition)
    }
    return Utils.smoothPoints(this.filterQueue)
  }

  set smoothPos (val) {
    this.smoothPosition = val
  }
}
