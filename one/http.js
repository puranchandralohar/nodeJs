const http = require("http");
const fs = require('fs');

const PORT = 8000;
const hostname = "localhost";

const home = fs.readFileSync('./index.html','utf-8');

const server = http.createServer((request, response) => {
  if (request.url === "/") {
    response.write(home)
  }
  else if (request.url === "/about") {
    response.write(`<h1>About Page</h1>`)
  }

  else if (request.url === "/contact") {
    response.write(`<h1>Contact</h1>`)
  }

  else if (request.url === "/services") {
    response.write(`<h1>services</h1>`)
  }
  
  else{
    response.write('<h1>404 Not found</h1>')
}
response.end()
  
});

server.listen(PORT, hostname, () => {
  console.log(`Server is Started on http://${hostname}/${PORT}`);
});
