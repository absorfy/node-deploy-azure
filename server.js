const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

// простий healthcheck
app.get('/', (req, res) => {
  res.send('OK');
});

// опційний: ще один маршрут
app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from Express!' });
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
