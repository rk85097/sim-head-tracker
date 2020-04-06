
export default class Utils {
  static smoothPoints (points) {
    const xArr = points.map(p => { return p.x })
    const yArr = points.map(p => { return p.y })
    return { x: Utils.avg(xArr), y: Utils.avg(yArr) }
  }
  static avg (v) {
    return v.reduce((a, b) => a + b, 0) / v.length
  }
}
