

module.exports = function game(playerAction){
    console.log('你出了' + playerAction);
    const random = Math.floor(Math.random() * 3);
    const computerAction = ['rock', 'scissor', 'paper'][random];
    console.log('对方出了' + computerAction);
    if (playerAction === computerAction) {
        console.log('平局')
        return 0
    }
    else {
        if (playerAction === 'scissor' && computerAction === 'paper' || playerAction === 'paper' && computerAction === 'rock' || playerAction === 'rock' && computerAction === 'scissor') {
            console.log('你赢了')
            return -1
        }
        else {
            console.log('你输了')
            return 1
        }
    }
}