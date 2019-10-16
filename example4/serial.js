/**
 * then\catch返回新的promise,回调如果有throw则会reject，有return则会resolve
 * @param {*} round 
 */
function interview(round) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() > 0.2) {
                resolve('success');
            }
            else {
                reject(round)
            }
        }, 500);
    })
}

let promise = interview(1)
    .then(() => {
        return interview(2);
    })
    .then(() => {
        return interview(3)
    })
    .then(res => {
        console.log('smile')
    })
    .catch((round) => {
        console.log('cry at ' + round + ' round')
    })