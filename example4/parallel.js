function interview(name) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() > 0.2) {
                resolve('success');
            }
            else {
                reject(name)
            }
        }, 500);
    })
}

Promise.all([
    interview('geekbang'),
    interview('tencent')
])
    .then((res) => {
        console.log('smile')
    })
    .catch(err => {
        console.log('cry for ' + err)
    })