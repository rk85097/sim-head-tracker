const Taira = require('taira')

export default class Utils {
  static smoothPoints (points) {
    const xArr = points.map(p => { return p.x })
    const yArr = points.map(p => { return p.y })
    return { x: Utils.avg(xArr), y: Utils.avg(yArr) }
  }
  static avg (v) {
    return v.reduce((a, b) => a + b, 0) / v.length
  }
  static smoothOut (vector, variance) {
    var t_avg = Utils.avg(vector)*variance;
    var ret = Array(vector.length);
    for (var i = 0; i < vector.length; i++) {
      (function () {
        var prev = i>0 ? ret[i-1] : vector[i];
        var next = i<vector.length ? vector[i] : vector[i-1];
        ret[i] = Utils.avg([t_avg, Utils.avg([prev, vector[i], next])]);
      })();
    }
    return ret;
  }
}
