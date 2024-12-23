const express = require('express');
const app = express();
app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  // Check if userId is a valid number
  if (isNaN(userId) || parseInt(userId) <=0 ) {
    return res.status(400).json({ error: 'Invalid user ID' });
  }
  // ... (Fetch user data from database)
  // ... (Handle potential database errors)
  // Example (assuming you have a users array):
  const user = users.find(user => user.id === parseInt(userId));
  if (!user) {
    return res.status(404).json({ error: 'User not found' });
  }
  res.json(user);
});