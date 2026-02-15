// // building HTTP server
// const http = require('http'); 
// const myServer = http.createServer((req,res)=>{
//     console.log(req);
//     res.end("Hello from server Again");
// }); //req mei client se aane wali request ka data hota hai (jaise kon hai jo req. kr rha hai uska IP address kya hai and ye sab), res mei server se client ko bhejne wali response ka data hota hai

// //ab is server ko run krne ke liye hme ek port ki jarurat hoti hai 
// // port ek type ka address hota hai jiske through hum apne server ko access krte hai ki matlab konse port pe hm server run kre ge 
// // ek port pr ek hi server run kr skta hai , agar hm same port pr do server run krne ki koshish krenge to error aayega
// myServer.listen(8000,()=> console.log("Server Started"));
// //ab hm apne server ko access kr skte hai browser mei jaake localhost:8000 likhke


// //let's perform a task using fs module and server (jab bhi koi incoming request ayegi toh hum log bnayenge ek file jisme request ka time,data store hoga)
// const fs = require("fs");
// const server2 = http.createServer((req,res)=>{
//     if(req.url == "/favicon.io") return res.end();
//     fs.appendFile("log.txt", `Request made at: ${Date.now()}: ${req.url}\n`, (err,data)=>{
//     if(req.url === "/"){
//         res.end("Welcome to Home Page");
//     }
//     else if(req.url === "/about"){
//         res.end("I am Shreya, a backend developer");
//     }
//     else{
//         res.end("404 Not Found");
//     }
//     });
// });

// server2.listen(8001, ()=> console.log("Server2 started at port2"));




// //LEC - 8 Handling URL'S (installed node modules)
// const http = require('http');
// const fs = require('fs');
// const url = require('url');

//  const server3 = http.createServer((req,res)=>{
//     if(req.url == "/favicon.ico") return res.end();
//     const myUrl = url.parse(req.url,true);
//     console.log(myUrl);
//     fs.appendFile("log.txt", `New Request: ${Date.now()}: ${req.url}\n`,(err,data)=>{
//         if(myUrl.pathname == "/") res.end("Welcome to Home Page");
//         else if(myUrl.pathname=="/about") {
//             const username = myUrl.query.myname;
//             res.end(`Hi, ${username}`);
//         }
//         else res.end("404 Not Found");
//     });
//  });
// server3.listen(8001,()=> console.log("Server3 started at port 8001"));




// //LEC-9 HTTP Mthods
// const http = require('http');
// const fs = require('fs');
// const url = require('url');

//  const server3 = http.createServer((req,res)=>{
//     if(req.url == "/favicon.ico") return res.end();
//     const myUrl = url.parse(req.url,true);
//     console.log(myUrl);
//     fs.appendFile("log.txt", `New Request: ${Date.now()}: ${req.method} ${req.url}\n`,(err,data)=>{
//         if(myUrl.pathname == "/") res.end("Welcome to Home Page");
//         else if(myUrl.pathname=="/about") { 
//             const username = myUrl.query.myname;
//             res.end(`Hi, ${username}`);
//         }
//         else res.end("404 Not Found");
//     });
//  });
// server3.listen(8001,()=> console.log("Server3 started at port 8002"));



//---------------------------
//lec. 10
//STARTING WITH EXPRESS IN NODE JS 

const express = require('express');

const app = express();
app.get("/", (req,res)=>{
    return res.end("Hello from Home Page");
});

app.get("/about", (req,res)=>{
    return res.end("Hello from About Page"+ "\n Hey "+req.query.name);
});

app.listen(8000, ()=> console.log("Server3 started at port 8001"));

//so as you can see that express can make your code look so much easier , simpler , easy to understand

//basic routing 
// app.METHOD(PATH, HANDLER)
//- app is an instance of express
//METHOD is an HTTP request method , in lowercase
//PATH is a path on the server
//HANDLER is the function executed when the route is matched