const express = require('express');
const app = express();
const port = 3000;

// ใช้ชื่อให้ตรงกัน
const sensorRoute = require('./routes/sensor');

app.use(express.json()); // ต้องมาก่อน route ที่ใช้งาน body

// ใช้ path /data กับ sensorRoute
app.use('/data', sensorRoute);

// หน้าหลัก
app.get('/', (req, res) => {
  res.send('Welcome to ESP32 API Server 🌍');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
