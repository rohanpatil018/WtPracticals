// Import the built-in 'http' module
const http = require("http");

// Create the server
const server = http.createServer((req, res) => {
  // Set response header
  res.writeHead(200, { "Content-Type": "text/plain" });

  // Send response message
  res.end("Welcome to My First Node.js Web Server!");
});

// Server listens on port 3000
server.listen(3000, () => {
  console.log("Server is running at http://localhost:3000/");
});
