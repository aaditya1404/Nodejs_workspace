import http from "http";

// Creating the server
const server = http.createServer((req, res) => {
    // console.log(res);

    res.setHeader("Content-Type", "text/html"); // This line is used to set the headers os our server.

    // This will help us to set the status code of our server along with the status code message.
    res.statusCode = 404;
    res.statusMessage = "BAD";

    // Shorthand for status (code, message & header)
    res.writeHead(202, "Good", { "Content-Type": "text/html" });

    // res.write("<h1>Hello from Node.js Server.</h1>") // This line will write Hello from Node.js Server in the local host 8000 when we will run and start the server.
});

// Server is listing on the port 8000
server.listen(8000, () => { console.log("Server up") });