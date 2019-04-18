const { spawn, exec, execFile } = require('child_process');
let path = require('path')
let batPath = path.resolve(__dirname, "bat/a.bat")
const bat = spawn('cmd.exe', ['/c', batPath]);

bat.stdout.on('data', (data) => {
    // console.log(`stdout: ${data}`);
});

bat.stderr.on('data', (data) => {
    console.log(`stderr: ${data}`);
});

bat.on('close', (code) => {
    console.log(`child process exited with code ${code}`);
});
/*exec(`"${batPath}"`, (err, stdout, stderr) => {
    console.log(stderr)
})

exec(`cat *.js`, (err, stdout, stderr) => {
    console.log(stderr)
})*/

execFile('node', ['--version'], (err, stdout, stderr) => {
    console.log(stdout)
})
//改成异步
const util = require('util');
const execFilePromise = util.promisify(require('child_process').execFile);
async function getVersion(){
   const { stdout} =  await execFilePromise('node',['--version'])
   console.log(stdout)
}
getVersion()