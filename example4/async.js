//async function 其实是promise的语法糖
//以同步的方式写异步
console.log((async function () {
    return 4
})())
console.log((function () {
    return new Promise((resolve, reject) => {
        resolve(4)
    })
})())
//await暂停async function 执行
//同步的方式获取promise的执行结果
//try-catch可以获取await的错误，获取另一个事件循环函数调用栈的错误
const result = (async function test() {
    try {
        let content = await new Promise((resolve, reject) => {
            setTimeout(() => {
                reject(new Error(8))
            }, 500);
        })
        console.log(content)
    }
    catch (err) {
        console.log('error', err.message)
    }   
    return 4;
})()

setTimeout(() => {
    console.log(result)
}, 800);


