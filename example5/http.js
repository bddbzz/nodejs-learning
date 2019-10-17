const http = require('http')
const fs = require('fs')
const url = require('url')
const querystring = require('querystring')
const game = require('./game')
let playerWon = 0
http.createServer(function (req, res) {
    let parsedUrl = url.parse(req.url)
    let pathname = parsedUrl.pathname;
    if (pathname === '/favicon.ico') {
        res.writeHead(200)
        res.end()
        return
    }
    if (pathname === '/') {
        res.writeHead(200)
        fs.createReadStream(__dirname + '/index.html').pipe(res)
        return
    }
    if (pathname === '/game') {
        if (playerWon >= 3) {
            res.writeHead(500)
            res.end('我不玩了')
            return
        }
        let query = querystring.parse(parsedUrl.query)
        let playerAction = query.action
        if(!playerAction){
            res.writeHead(400)
            res.end('参数错误')
            return
        }
        let result = game(playerAction)
        res.writeHead(200)
        if (result == 0) {
            res.end('平局!')
        }
        else if (result == 1) {
            res.end('你赢了!')
            playerWon++
        }
        else {
            res.end('你输了!')
        }
    }
}).listen(3000)