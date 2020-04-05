// import KalmanFilter from 'kalmanjs'

export default class Utils {
  static avgPoints (pts) {
    let xa = Utils.avg(pts.map((p) => { return p.x }))
    let ya = Utils.avg(pts.map((p) => { return p.y }))
    return { x: xa, y: ya }
  }

  static getDistance (p1, p2) {
    var a = p1.x - p2.x
    var b = p1.y - p2.y
    return Math.sqrt(a * a + b * b)
  }

  static avg (v) {
    return v.reduce((a, b) => a + b, 0) / v.length
  }

  static midpoint (a, b) {
    return {x: (a.x + b.x / 2), y: (a.y + b.y / 2)}
  }

  // static applyKalman (data, r = 0.01, q = 20) {
  //   var kf = new KalmanFilter({R: r, Q: q})
  //   return data.map(function (v) {
  //     return kf.filter(v)
  //   })
  // }

  static setUIStatusContent (text) {
    document.getElementById('status').innerHTML = text
  }

  static setAvatarOpacity (opacity) {
    const style = 'opacity: ' + opacity
    document.getElementById('avi').style = style
  }
}
