const http = require("http");
const fs = require("fs");
const url = require("url");

// just creates server

const hostname = '127.0.0.1';
const port = 3000;

const myServer = http.createServer((req, res) => {
    const log = `New request at time :${Date.now()}`

    const myUrl = url.parse("https://nodejs.org/api/url.html", true, true)
    console.log("myUrl", myUrl);
    //WHATWG standard way for url
    const whatWgStURL = new URL("https://nodejs.org/api/url.html")
    console.log("whatWgStURL", whatWgStURL)
    fs.appendFile("log.txt", log, (err, data) => {
        switch (res.url) {
            case "/": res.end("Home")
                break;
            case "/contact": res.end("contact 918265365")
                break;
        }
    })
    console.log("name", myUrl.query.name);
    console.log("user ID", myUrl.query.id);

});

myServer.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});



