const buffer1 = Buffer.from('geekbang')
const buffer2 = Buffer.from([1, 2, 3, 4])
const buffer3 = Buffer.alloc(30)
const fs = require('fs')

console.log(buffer1)
console.log(buffer2)
console.log(buffer3)

buffer2.writeInt8(30, 3) //数字 偏移
console.log(buffer2)
buffer2.writeInt16BE(256, 1) //BE LE 低位到高位的顺序
console.log(buffer2)

const protobuf = require('protocol-buffers')
const schema = protobuf(fs.readFileSync(__dirname + '/test.proto', 'utf-8'))
let buffer = schema.Column.encode({
    id: 1,
    name: 'Node.js',
    price: 80.4
})
console.log(buffer)
let data = schema.Column.decode(buffer)
console.log(data)