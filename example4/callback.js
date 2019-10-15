function interview(callback) {
    setTimeout(() => {
        if (Math.random() > 0.8) {
            callback(null, 'success');
        }
        else {
            callback(new Error('fail'))
        }
    }, 500);
}

interview((err, res) => {
    if (err) {
        console.log('cry')
        return
    }
    console.log('smile')
})