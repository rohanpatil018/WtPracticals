// Import the built-in 'http' module
const http = require("http");

// Create the web server
const server = http.createServer((req, res) => {
  // Set the header to tell the browser this is HTML
  res.writeHead(200, { "Content-Type": "text/html" });

  // Send an HTML response
  res.end(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>My First Node.js Web Server</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          background: linear-gradient(135deg, #74ebd5, #9face6);
          color: #333;
          text-align: center;
          margin: 0;
          padding: 100px 0;
        }
        h1 {
          font-size: 2.5rem;
          color: #222;
        }
        p {
          font-size: 1.2rem;
          color: #555;
        }
      </style>
    </head>
    <body>
      <h1>Welcome to My First Node.js Web Server!</h1>
      <p>This page is served using Node.js and the HTTP module.</p>
    </body>
    </html>
  `);
});

// Server listens on port 3000
server.listen(3000, () => {
  console.log("✅ Server running at http://localhost:3000/");
});
