const http = require('http');


const server = http.createServer((req, res) => {
    if(req.url === "/") {
        res.write("I am himanshu");
    }
    if(req.url === "/him") {
        res.write("I am in linux");
        res.end();
    }
})


const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Listening on PORT ${PORT}`);
})
