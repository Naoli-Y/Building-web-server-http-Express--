// // // Path core module exmaple
const path = require("path");
var pathObj = path.parse(__filename);

// console.log(__filename); // will take us to file name
// console.log(__dirname); // will take us to directer name

// console.log(pathObj);


// // // os core module example
const os = require("os");
// console.log(os)
var totalMemo = os.totalmem();
var memo = os.freemem();

console.log("total Memory", totalMemo);
console.log("free Memory", memo);
console.log(os.platform());
console.log(os.arch());