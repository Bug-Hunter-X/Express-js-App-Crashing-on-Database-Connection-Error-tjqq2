const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  // This line will throw an error if the database connection fails
  const result = await database.query('SELECT * FROM users');
  res.send(result);
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});