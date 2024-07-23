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

// console.log("total Memory", totalMemo);
// console.log("free Memory", memo);
// console.log(os.platform());
// console.log(os.arch());


// // // fileSystem core module example
const { readdir, mkdir, readFile, writeFile } = require("fs");

// readdir("./", (err, Files) => {
//     if (err) console.log("error", err);
//     else console.log(Files);
// });

  // to creat folder
// mkdir("test", (err, path) => {
//     if (err) console.log("error", err);
//     console.log(path); // if recursive is false it returns undefined
// })


//  readFile("example.txt", "utf8", (err, data) => {
//     if (err) throw err;
//     console.log(data);
//  });


 writeFile("message.txt", "Hello class", (err) => {
    if (err) throw err;
    console.log("The file has been saved!");
 });