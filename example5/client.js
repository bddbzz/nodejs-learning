const net = require("net")

const socket = new net.Socket({})
socket.connect({
    host: '127.0.0.1',
    port: 4000
})


let lessonIds = ['1001', '1002', '1003', '1004', '1005']

let buffer = Buffer.alloc(2);
let index = Math.floor(Math.random() * lessonIds.length)
buffer.writeInt16BE(lessonIds[index])
console.log('client',lessonIds[index])
socket.write(buffer.toString());

socket.on("data", function (buffer) {
    console.log("client", lessonIds[index], buffer.toString())
    buffer = Buffer.alloc(4);
    index = Math.floor(Math.random() * lessonIds.length)
    buffer.writeInt16BE(lessonIds[index])
    socket.write(buffer);
})