// Import the built-in 'fs' module
const fs = require("fs");

// Step 1: Create a new file and write content into it
fs.writeFile("student.txt", "Welcome to Node.js File System Module", (err) => {
  if (err) {
    console.error("Error writing file:", err);
    return;
  }
  console.log("File 'student.txt' created and text written successfully.");

  // Step 2: Read the contents of the file
  fs.readFile("student.txt", "utf8", (err, data) => {
    if (err) {
      console.error("Error reading file:", err);
      return;
    }
    console.log("📘 File Content:");
    console.log(data);

    // Step 3: Delete the file
    fs.unlink("student.txt", (err) => {
      if (err) {
        console.error("Error deleting file:", err);
        return;
      }
      console.log("🗑️ File 'student.txt' deleted successfully.");
    });
  });
});


