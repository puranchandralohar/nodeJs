const fs = require('fs');

fs.writeFile('demo.txt',"Hello This is Puran",()=>{
    console.log("Sucessfully File Created with data")
})


fs.readFile("./demo.txt","utf-8",(err,data)=>{
    if(err){
        throw err;
    }
    console.log(data);
})


