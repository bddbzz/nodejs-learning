const koa = require('koa')
const mount = require('koa-mount')
const fs = require('fs')
const app = new koa()
const game = require('./game')

let playerWinCount = 0
let lastPlayerAction = null
let sameActionCount = 0

app.use(mount('/favicon.ico', function (ctx) {
    ctx.status = 200
}))
let gameKoa = new koa()
app.use(mount('/game', gameKoa))
gameKoa.use(async function (ctx, next) {
    if (playerWinCount >= 3) {
        ctx.status = 500
        ctx.body = '再不要和你玩了'
        return
    }
    await next()
    if (ctx.playerWon) {
        playerWinCount++
    }
})
gameKoa.use(async function (ctx, next) {
    if (sameActionCount > 2) {
        ctx.status = 400
        ctx.body = '你作弊'
        return
    }
    let query = ctx.query
    let playerAction = query.action
    if (!playerAction) {
        ctx.status = 400
        return
    }
    if (lastPlayerAction && lastPlayerAction === playerAction) {
        sameActionCount++
    }
    else {
        sameActionCount = 0
    }
    lastPlayerAction = playerAction
    ctx.playerAction = playerAction
    await next()
})
gameKoa.use(async function (ctx, next) {
    await new Promise(function (resolve, reject) {
        setTimeout(() => {
            let result = game(ctx.playerAction)
            if (result == 0) {
                ctx.body = '平局!'
            }
            else if (result == 1) {
                ctx.body = '你赢了!'
                ctx.playerWon = true
            }
            else {
                ctx.body = '你输了!'
            }
            resolve()
        }, 500);
    })
})

app.use(mount('/', function (ctx) {
    ctx.body = fs.readFileSync(__dirname + '/index.html', 'utf-8')
}))

app.listen(4000)