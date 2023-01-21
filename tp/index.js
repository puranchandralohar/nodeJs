 const fs = require('fs');

 //Creating a File 
 fs.writeFileSync('read.txt',"Welcome Puran");

 //Appendind data to a file
 fs.appendFileSync('read.txt'," You are learning NodeJs")

//reading from file
 fs.readFileSync('read.txt');

 const buf_data =  fs.readFileSync('read.txt');

 console.log(buf_data);
 console.log(buf_data.toString());

 //rename a file
 fs.renameSync('read.txt','Text.txt')
