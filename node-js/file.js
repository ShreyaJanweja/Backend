const fs = require('fs');
// //synchronus call
// fs.writeFileSync("./test.txt", "This is a test file created using node js");

// //asynchronus call
// fs.writeFile("./test.txt", "Asunchronus call to create a file", (err)=>{}); 


// //read file synchronusly - sync returns a value
// const result = fs.readFileSync("./contact.txt", "utf-8");
// console.log(result);  


// //read file asynchronusly - async does not return a value
// fs.readFile("./contact.txt","utf-8",(err,result)=>{
//     if(err){
//         console.log("Error",err);
//     } else{
//         console.log(result);
//     }
// })



// //append data to a file - sync (does not ovverwrite the existing data , it adds the new data to the end of the file)
// fs.appendFileSync("./test.txt","\n"+ new Date().getDate().toLocaleString());


// // //append data to a file - async
// fs.appendFile("./test.txt", "\n" + new Date().getDate().toLocaleString(), (err) => {
//     if (err) {
//         console.log("Error", err);
//     } else {
//         console.log("Data appended successfully");
//     }
// });


// //copy file - sync
// fs.appendFileSync("./test.txt", `${Date.now()} \n Hey There!`);
// fs.cpSync("./test.txt","./copy.txt");


// //to delete a file (unlink sync)
// fs.unlinkSync("./copy.txt");


//to see files stats 
// console.log(fs.statSync("./test.txt"));

// //stats - check if it is a file
// console.log(fs.statSync("./test.txt").isFile());


//mkdir
//fs.mkdirSync("my-docs");


//note: ye sab chije hum javascript mei nhi kr skte hai , js does not have file handling due to security reasons