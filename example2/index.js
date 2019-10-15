let lib = require('./lib.js');
lib.str = '222'
lib.hello = function () {
    console.log('hello2')
};
lib.obj = {
    id: 12,
    name: 'ss2'
}

console.log(lib)