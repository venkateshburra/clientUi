const express = require("express");
const cors = require("cors");  // Import the cors module
const app = express();
const PORT = 5000;

// Enable CORS for all origins (you can limit it to specific origins for better security)
app.use(cors());  // Use CORS middleware

// Middleware to parse JSON
app.use(express.json());

// Test route
app.get("/", (req, res) => {
  res.send("Backend is working!");
});

// Route to log email and password (POST request)
app.post("/login", (req, res) => {
  const { email, password } = req.body;
  console.log(req.body)
  res.json({ message: "Login details receiveds!", email, password});
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
