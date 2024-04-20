import http from "http";

// Creating a server.
const server = http.createServer((req, res) => {
    console.log(req.url); // This will show us in which page we giving a request. For example if we are in the home page then this page will give us the output "/".

    if (req.url === "/") {
        res.end("<h1>Home</h1>");
    } else if (req.url == "/about") {
        res.end("<h1>About</h1>");
    }
});

server.listen(8000, () => {
    console.log("Server is running in port number : 8000");
})