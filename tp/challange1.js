const fs = require('fs');

// fs.mkdirSync("Puran");

// fs.writeFileSync('Puran/bio.txt',"I am Puran Chandra Lohar");

// fs.appendFileSync("Puran/bio.txt", " I am from Dhanbad");

const buf_data = fs.readFileSync('Puran/bio.txt',"utf-8"); // utf-8 for returning string

console.log(buf_data)