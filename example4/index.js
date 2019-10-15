const EventEmitter = require('events').EventEmitter;
class GeekTime extends EventEmitter {
    constructor(){
        super()
        setTimeout(() => {
            this.emit('newlesson', { price: Math.random() * 100 })
        }, 3000);
    }
}

let geektime = new GeekTime();
geektime.on('newlesson', (res)=>{
    console.log(res);
});