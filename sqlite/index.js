var sqlite3 = require("sqlite3")
var db = new sqlite3.Database("./tmp/1.db",function(err){
    console.log(err)
    db.run("create table test(name varchar(15))",function(err){
        console.log(err)
        db.run("insert into test values('hello world')",function(){
            db.all("select * from test",function(err,res){
                debugger
                if(!err){
                    console.log(JSON.stringify(res))
                }
                else{
                    console.log(err)
                }
            })
        })
    })
})

process.on("uncaughtException",function(err){
    console.log(err)
})