const zlib = require('zlib')
const gzip = zlib.createGzip()
const fs = require('fs')
const inp = fs.createReadStream('input.txt')
const out = fs.createWriteStream('input.txt.gz')

inp.pipe(gzip).pipe(out)


const input = '----------------'
zlib.deflate(input,(err,buffer)=>{ //压缩
    if(err){
        throw err
    }
    console.log(buffer.toString('base64'))
})
const buffer  = Buffer.from('eJzT1UUFABf4AtE=','base64') //解压缩
zlib.unzip(buffer,(err,out)=>{
    if(err){
        throw err
    }
    console.log(out.toString())
})
