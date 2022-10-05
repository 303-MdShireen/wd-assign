const http = require('http')
const hostname = '127.0.0.1';
const port = 3000;
const fs= require("fs");
//const { response } = require('express');

fs.readFile("home.html",
(err,home) => {
if(err){
    throw err;
}
homecontent=home;
});

fs.readFile("project.html",
(err,fil) => {
    if(err)
    {
        throw err;
    }
   filecontent=fil;
})

fs.readFile("registration.html",
(err,regf) => {
    if(err)
    {
        throw err;
    }
 reg=regf;
})
//let args=require("minimist")(process.argv.slice(2));
var server=http.createServer((request,response) =>{
    let url =request.url
    response.writeHeader(200,{"Content-type":"text/html"})
    switch (url)
    {
        case "/project":
            response.write(filecontent)
            response.end();
            break
        case "/registration":
            response.write(reg)
            response.end();
            break;
        default:
            response.write(homecontent)
            response.end();
            break;
    }
});
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
  });