//building HTTP server
const http = require('http'); 
// const myServer = http.createServer((req,res)=>{
//     console.log(req);
//     res.end("Hello from server Again");
// }); //req mei client se aane wali request ka data hota hai (jaise kon hai jo req. kr rha hai uska IP address kya hai and ye sab), res mei server se client ko bhejne wali response ka data hota hai

// //ab is server ko run krne ke liye hme ek port ki jarurat hoti hai 
// // port ek type ka address hota hai jiske through hum apne server ko access krte hai ki matlab konse port pe hm server run kre ge 
// // ek port pr ek hi server run kr skta hai , agar hm same port pr do server run krne ki koshish krenge to error aayega
// myServer.listen(8000,()=> console.log("Server Started"));
// //ab hm apne server ko access kr skte hai browser mei jaake localhost:8000 likhke


//let's perform a task using fs module and server (jab bhi koi incoming request ayegi toh hum log bnayenge ek file jisme request ka time,data store hoga)
const fs = require("fs");
const server2 = http.createServer((req,res)=>{
    fs.appendFile("log.txt", `Request made at: ${Date.now()}: ${req.url}\n`, (err,data)=>{
    if(req.url === "/"){
        res.end("Welcome to Home Page");
    }
    else if(req.url === "/about"){
        res.end("I am Shreya, a backend developer");
    }
    else{
        res.end("404 Not Found");
    }
    });
});

server2.listen(8001, ()=> console.log("Server2 started at port2"));