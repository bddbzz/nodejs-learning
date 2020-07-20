const net = require("net")
const server = net.createServer((socket) => {
    socket.on("data", function (buffer) {
        const lessonId = buffer.readInt16BE()
        console.log("server:",lessonId)
        buffer.write(Buffer.from(data[lessonId]))
    })
})
server.listen(4000)

const data = {
    1001: "课程1",
    1002: "课程2",
    1003: "课程3",
    1004: "课程4",
    1005: "课程5"
}