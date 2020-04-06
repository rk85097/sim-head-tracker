var dgram = require('dgram')

export default class UDPClient {

    constructor(port, ip) {
        this.port = port
        this.ip = ip
        this.client = dgram.createSocket('udp4')
    }

    send(dataref, value) {
        let runningIndex = 4
        const farr = new Float32Array(1)
        farr[0] = -value
        const valBytes = new Uint8Array(farr.buffer)
        runningIndex += dataref.length + valBytes.length
        const rawMsg = [...[68,82,69,70,0], ...valBytes, ...dataref]
        runningIndex++
        for (let i = runningIndex; i <= 508; i++) {
            rawMsg[i] = 0    
        }
        const msg = new Buffer(rawMsg)
        this.client.send(msg, this.port, this.ip)
    }
}
