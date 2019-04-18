console.time('t1')
setTimeout(() => {
    console.timeEnd('t1')
}, 3000);
console.time('t2')
setImmediate(() => { //可能早于可能晚于setTimeout
    console.timeEnd('t2')
});
console.time('t3')
setTimeout(() => {
    console.timeEnd('t3')
}, 0);
let process = require('process')
console.time('t4')
process.nextTick(() => {
    console.timeEnd('t4')
})
console.log(1)
var async_hooks = require('async_hooks') //Node 8+, 跟踪异步资源
var http = require('http')
var fs = require('fs')

class AsyncCallback {
    init(asyncId, type, triggerId) {
        fs.writeSync(1, `init ${asyncId} ${type} ${triggerId}\n`) //需要用同步打印日志的方式， console.log异步会导致无限循环
    }
    before(asyncId) {
        fs.writeSync(1, `before ${asyncId}\n`)
    }
    after(asyncId) {
        fs.writeSync(1, `after ${asyncId}\n`)
    }
    destroy(asyncId) {
        fs.writeSync(1, `destroy ${asyncId}\n`)
    }
    promiseResolve(asyncId) {
        fs.writeSync(1, `promiseResolve ${asyncId}\n`)
    }
}

class MyResource extends async_hooks.AsyncResource { //异步资源
    constructor() {
        super('MyResource')
    }
    asyncMethod(callback) {
        this.emitBefore()
        callback()
        this.emitAfter()
    }
}

var asyncHook = async_hooks.createHook(new AsyncCallback())
asyncHook.enable()

http.createServer(function (req, res) {
    res.end('hello qts')
}).listen(8079)

new Promise(function (resove, reject) {
    resove()
})

var myResource = new MyResource()
myResource.asyncMethod(() => { })