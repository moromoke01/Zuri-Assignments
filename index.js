const path = require('path')
const fs =require('fs')
const http =require("http")
const server =http.createServer((req, res)=>{

    if(req.url === "/"){
    let filePath = path.join(__dirname, 'public', 'index.html');
                fs.readFile(filePath, 'utf8', (err, content)=>{
                    res.writeHead(200, {'Content-Type': 'text/html'});
                    res.end(content);
        })
     }

   //for About.html
   if(req.url === "/About.html"){
    let filePath = path.join(__dirname, 'public', 'About.html');  
                fs.readFile(filePath, 'utf8', (err, content)=>{
                    res.writeHead(200, {'Content-Type': 'text/html'});
                    res.end(content);
        })
     }
     //for Contact.html
   if(req.url === "/Contact.html"){
    let filePath = path.join(__dirname, 'public', 'Contact.html');    
                fs.readFile(filePath, 'utf8', (err, content)=>{
                    res.writeHead(200, {'Content-Type': 'text/html'});
                    res.end(content);
        })
     }
   })

const port= 4000
server.listen(port, () =>{
    console.log(`Server is now running on port ${port}`);
});