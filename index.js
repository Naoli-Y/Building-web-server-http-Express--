/// /// /// ******* Serving simple text with HTTP ************ /// /// ///

const http = require("http");
// console.log(http)

const myServer = http.createServer((req, res) => {
    // console.log(req);
    // console.log(res);
    res.write("Hello class");

     res.write("\n Selam nw");
    
    res.end();
})

myServer.listen(1234); // i.e - http://localhost:1234

console.log("server running on port 1234");