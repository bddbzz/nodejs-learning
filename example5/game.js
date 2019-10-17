

module.exports = function game(playerAction){
    const random = Math.floor(Math.random() * 3);
    const computerAction = ['rock', 'scissor', 'paper'][random];
    if (playerAction === computerAction) {
        return 0
    }
    else {
        if (playerAction === 'scissor' && computerAction === 'paper' || playerAction === 'paper' && computerAction === 'rock' || playerAction === 'rock' && computerAction === 'scissor') {
            return 1
        }
        else {
            return -1
        }
    }
}