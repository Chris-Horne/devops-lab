const express = require('express');
const app = express();

app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from the backend!' });
});

module.exports = app;
// This file is part of a simple Express.js application that serves a JSON response.