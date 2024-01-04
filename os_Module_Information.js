const os = require('os');       //os_Module_Information
// console.log(os);

console.log(os.cpus());
console.log(os.freemem()/(1024*1024*1024));
console.log(os.totalmem()/(1024));
console.log(os.arch());
console.log(os.hostname());
console.log(os.platform());
console.log(os.userInfo());