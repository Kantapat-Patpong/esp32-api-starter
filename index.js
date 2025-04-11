const express = require('express');
const app = express();
const port = 3000;

const sensorRoute = require('./routes/sensor');

app.use(express.json());
app.use('/data', sensorRoute);

app.get('/', (req, res) => {
  res.send('Welcome to ESP32 API Server 🌍');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
