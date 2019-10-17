const express = require('express')
const fs = require('fs')
const app = express()
const game = require('./game')

let playerWon = 0

app.get('/favicon.ico', function (req, res) {
    res.status(200)
    res.end()
})
app.get('/', function (req, res) {
    res.status(200).send(fs.readFileSync(__dirname + '/index.html', 'utf-8'))
    res.end()
})
app.get('/game', function (req, res, next) {
    if (playerWon >= 3) {
        res.status(500)
        res.end()
        return
    }
    let query = req.query
    let playerAction = query.action
    if (!playerAction) {
        res.status(400)
        res.end()
        return
    }
    res.playerAction = playerAction
    console.time('express')
    next()
    console.timeEnd('express') //对异步的处理不太好

}, function (req, res) {
    setTimeout(() => {
        let result = game(res.playerAction)
        res.status(200)
        if (result == 0) {
            res.send('平局!')
        }
        else if (result == 1) {
            res.send('你赢了!')
            playerWon++
        }
        else {
            res.send('你输了!')
        }
        res.end()
    }, 500);

})
app.listen(3000)