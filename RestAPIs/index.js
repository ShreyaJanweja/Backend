const express = require('express');
const fs = require("fs");
const app = express();
const PORT = 8000;
const users = require("./MOCK_DATA.json");

//middleware - Plugin 
app.use(express.urlencoded({extended: false})); //for parsing form data

//routes
//html format (web app)
app.get("/users", (req,res)=>{
    const html = `
    <ul>
        ${users.map((user)=> `<li>${user.first_name}</li>`).join("")}
    </ul>
    `;
    res.send(html);
});


//REST APIs
//json format (mobile app)
app.get("/api/users",(req,res)=>{
    return res.json(users);
});

//get any particular user by id 
app.get("/api/users/:id", (req,res)=>{
    const id = Number(req.params.id);
    const user = users.find((user)=> user.id === id);
    return res.json(user);
});


// // post , put, delete request cannot be made at browser, so for now will just create a router and test it using postman after creating a postman collection
// app.post("/api/users", (req,res)=>{
//     //TODO: create new user 
//     const body = req.body; //jo bhi data hum frontend se send krte hai vo 
//     //abhi agar console.log(body) krenge to undefined aayega kyuki express ko ye nahi pata ki humne jo data bheja hai vo json format me hai, isliye hume express.urlencoded() middleware use krna padega
//     //ye plugin kya kre ga - jo bhi form mei data ayega usse body object me convert kr dega, aur hum usse req.body se access kr skte hai
//     //ek middleware bna rhi hu sabse top pe likh ri hu
//     console.log('body: ',body); //jo bhi post request me data bheja hai vo yaha print hoga
//     return res.json({status: "pending"});
// });


//same mock data ko apne fake data jo MOCK_DATA.json mei add krte h
app.post("/api/users", (req,res)=>{
    const body = req.body;
    users.push({...body, id: users.length+1});
    fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err,data)=>{
        return res.json({status:"pending"});
    });
});


app.patch("/api/users", (req,res)=>{
    //TODO: edit the user with id
    return res.json({status: "pending"});
});


app.delete("/api/users", (req,res)=>{
    //TODO: delete the user with id
    return res.json({status: "pending"});
});



app.listen(PORT, ()=> console.log(`Server is running on port ${PORT}`));