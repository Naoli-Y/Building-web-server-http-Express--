/// /// /// ******* Serving simple text with HTTP ************ /// /// ///

const http = require("http");
// console.log(http)

// const myServer = http.createServer((req, res) => {
//     // console.log(req);
//     // console.log(res);
//     res.write("Hello class");

//      res.write("\n Selam nw");
    
//     res.end();
// })

// myServer.listen(1234); // i.e - http://localhost:1234

// console.log("server running on port 1234");


/// // // server create with different path
const server = http.createServer((req, res) => {
    console.log(req.url);
    if (req.url === "/") {
        res.write(
            "<h1>This is home page.</1>");
        res.end();
    } else if (req.url === "/about") {
        res.write("<h1>This is about page.</h1>");
        res.end();
    } else {
        res.write("<h1>Page Not Found!</h1>");
        res.end();
    }
});

// PORT
const PORT = 5001;

// server listen port
server.listen(PORT, () => {
    console.log(`Server is running on PORT: http://localhost:${PORT}`);
});