const http = require("http");
const fs = require("fs");

// just creates server
const myServer = http.createServer((req,res)=>{
    const log = `New request at time :${Date.now()}`
    fs.appendFile("log.txt",log,(err,data)=>{
        switch(res.url){
            case "/":res.end("Home")
            break;
            case "/contact":res.end("contact 918265365")
            break;
        }
    })

});

myServer.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});



