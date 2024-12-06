const express = require('express');
const app = express();
app.use(express.json());
app.post('/users', (req, res) => {
  // Assuming req.body contains user data
  const user = req.body;
  // ... process user data ...
  res.status(201).json({ message: 'User created', user });
});

// ... other routes ...

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});