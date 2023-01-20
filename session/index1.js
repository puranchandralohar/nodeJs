// Express Js is a Middleware

const express =require('express')

// const http = require('http');

const app = express();

// app.use((req,res,next)=>{
//     let isLoggedin = true;
//     if(isLoggedin){
//         console.log("Validating")
//         next()
//     }
//     else{
//         res.send("invalid credentials")
//     }
//     // console.log("First Middleware")
// })
// app.use((req,res,next)=>{
//     res.send("welcome")
//     // console.log("Second Middleware")

// })

app.use('/home', (req,res,next)=>{

        res.send("Welcome to Home")
})

app.use('/',(req,res,next)=>{
    res.send("About Page")

})



// const server = http.createServer(app);


// server.listen(3000);
app.listen(3000);

