// index.js

const express = require('express');
const app = express();
const port = 3000;

const client = require("prom-client");

const collectDefaultMetrics = client.collectDefaultMetrics;
collectDefaultMetrics();

app.get("/metrics", async (req, res) => {
  console.log("GET /metrics");
  res.set("Content-Type", client.register.contentType);
  res.end(await client.register.metrics());
});
// A simple console log when the server starts
console.log('Server is starting...');

// Dummy route 1
app.get('/', (req, res) => {
  console.log('GET / route called');
  res.send('Welcome to the homepage!');
});

// Dummy route 2
app.get('/about', (req, res) => {
  console.log('GET /about route called');
  res.send('About us page');
});

// Dummy route 3
app.get('/contact', (req, res) => {
  console.log('GET /contact route called');
  res.send('Contact us page');
});

// Dummy route 4 with query params
app.get('/search', (req, res) => {
  console.log('GET /search route called');
  console.log('Query Params:', req.query);
  res.send('Search results');
});

// Dummy route 5 with URL parameters
app.get('/user/:id', (req, res) => {
  console.log('GET /user/:id route called');
  console.log('User ID:', req.params.id);
  res.send(`User profile for ID: ${req.params.id}`);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
