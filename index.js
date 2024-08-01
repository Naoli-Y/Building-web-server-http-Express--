/// /// /// ******* Serving simple text with HTTP ************ /// /// ///

// const http = require("http");
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
// const server = http.createServer((req, res) => {
//     console.log(req.url);
//     if (req.url === "/") {
//         res.write(
//             "<h1>This is home page.</1>");
//         res.end();
//     } else if (req.url === "/about") {
//         res.write("<h1>This is about page.</h1>");
//         res.end();
//     } else {
//         res.write("<h1>Page Not Found!</h1>");
//         res.end();
//     }
// });

// PORT
// const PORT = 5001;

// server listen port
// server.listen(PORT, () => {
//     console.log(`Server is running on PORT: http://localhost:${PORT}`);
// });



/// /// /// ******** Serving static HTML file with HTTP ****** /// /// ///

// const http = require("http");
// const fs = require("fs");


// const serverMyStaticSite = http.createServer((req, res) => {
   
//     let reqPath = req.url;
//     console.log("requested path >>> ", reqPath);

//     if (reqPath === "/") {
//         reqPath = "/index.html";
//     }

//     let requestedFile = "./bob" + reqPath;
//     console.log("requested file >>> ", requestedFile);

//     fs.readFile(requestedFile, (err, content) => {
        
//         if (err) {
//            requestedFile = "./bob/notFound.html";
//            fs.readFile(requestedFile, (err, content) => {
//             res.writeHead(200, {"content-type": "text/html" });
//             res.write(content);
//             res.end();
//            })
//         } else{
//             res.writeHead(200, {"content-type": "text/html"})
//             res.write(content);
//             res.end();
//         }
//     });
// });

// serverMyStaticSite.listen(5050, () => {
//     console.log("Sevrver is running on PORT: http://localhost:5050");
// });



/// /// /// ***** Serving static webdite with HTTP & the help of mime-types ***** /// /// ///
// const http = require("http");
// const fs = require("fs");
// const mimeTypes = require("mime-types").lookup;

// const puppyServer = http.createServer((req, res) => {
//     let filePath = req.url;

//     if (filePath == "/") {
//         filePath = "/index.html";
//     }
//     let requestedFile = "./Media-Query-Demo-project/" + filePath;

//     fs.readFile(requestedFile, (err, content) => {
//         if (err) {
//             // // Custom 404 page
//             filePath = "./Media-Query-Demo-project/notFound.html";

//             fs.readFile(filePath, function (err, contents) {

//                 res.writeHead(404, { "Content-Type": mimeTypes(filePath) });
//                 res.end(contents);
//             });  
//         } else {
//             res.writeHead(200, { "content-type": mimeTypes(filePath) });
//             res.end(content);
//         }
//     });
// });

// const Puppy_PORT = 4000;
// puppyServer.listen(Puppy_PORT, () => {
//     console.log(`Server is running on PORT: http://localhost:${Puppy_PORT}`);
// });


/// /// // ***** Serving static website with Express ***** // /// ///
const Express = require("express");
const app = Express();

// // sevring static site
app.use(Express.static("Media-Query-Demo-project"));

const PORT = 303;

app.listen(PORT, (err) => {
    if (err) console.log(err);
    console.log(`server running on http://localhost:${PORT}`);
});

// // non existing routes
app.get("*", (req, res) => {
    res.sendFile(__dirname + "/Media-Query-Demo-project/notFound.html");
});