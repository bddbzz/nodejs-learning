var dns = require('dns')
dns.lookup('risk.pycredit.com',(err,address,family)=>{
    console.log('IP 地址: %j 地址族: IPv%s', address, family);
})