console.log('lib');
module.exports = function add(a, b){
    console.log(a + b);
}
exports.str = '111'
exports.hello = function () {
    console.log('hello')
};
exports.obj = {
    id: 1,
    name: 'ss'
}


setTimeout(() => {
    console.log(exports)
    console.log(module.exports)
}, 2000);