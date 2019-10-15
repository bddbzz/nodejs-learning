// const [node, path, ...argv] = process.argv;
// const playerAction = argv[0]

const game = require('./lib.js');
let count = 0;
process.stdin.on('data', (e) => {
    let playerAction = e.toString().trim()
    let result = game(playerAction);
    if( result === -1){
        count++;
    }
    if(count === 3){
        console.log('你太强了，我不玩了。')
        process.exit();
    }
})