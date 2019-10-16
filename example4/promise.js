let promise = new Promise((resolve, reject)=>{
    setTimeout(() => {
        resolve('success')
    }, 500);
})
let promise2 = promise.then((res)=>{
   return res
}).catch(err=>{
    throw new Error('error')
})

setTimeout(() => {
    console.log(promise)
}, 600);
setTimeout(() => {
    console.log(promise2)    
}, 700);

let promise3 = promise.then((res)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve('success2')
        }, 500);
    })
 }).then(err=>{
     return 'ss'
 })

 setTimeout(() => {
    console.log(promise3)    
}, 1100);
