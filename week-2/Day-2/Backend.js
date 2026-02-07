// Import express framework
const express = require('express');

// create express application
const app = express();

// middleware to allow JSON responses
app.use(express.json());

// sample data acting as database
const posts = [
  { id: 1, title: "First Post", body: "This is first post" },
  { id: 2, title: "Second Post", body: "This is second post" },
  { id: 3, title: "Third Post", body: "This is third post" }
];

// API route to return all posts
app.get('/posts', (req, res) => {
  res.json(posts);
});

// start server on port 3000
app.listen(3000, () => {
  console.log("Server running on port 3000");
});
