const [node, path, ...argv] = process.argv;
const playerAction = argv[0]
const random = Math.floor(Math.random() * 3);
const computerAction = ['rock', 'scissor', 'paper'][random];
if (playerAction === computerAction) {
    console.log('平局')
}
else {
    if (playerAction === 'scissor' && computerAction === 'paper' || playerAction === 'paper' && computerAction === 'rock' || playerAction === 'rock' && computerAction === 'scissor') {
        console.log('你赢了')
    }
    else {
        console.log('你输了')
    }
}