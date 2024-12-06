const express = require('express');
const app = express();

app.use(express.json({ strict: true })); // Added strict: true

app.post('/users', (req, res, next) => {
  try {
    // Access req.body safely; it will be parsed correctly by middleware
    const user = req.body;
    // ... process user data ...
    res.status(201).json({ message: 'User created', user });
  } catch (error) {
    next(error); // Pass error to error handling middleware
  }
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(400).json({ error: 'Invalid JSON' });
});

// ... other routes ...

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});