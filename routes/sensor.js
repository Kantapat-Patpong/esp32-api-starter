const express = require('express');
const router = express.Router();

let sensorData = [];

router.post('/', (req, res) => {
    const { temp, hum } = req.body;
    const time = new Date();
    const data = { temp, hum, time };
    sensorData.push(data);
    res.json({ status: 'OK', data });
});

router.get('/', (req, res) => {
    res.json(sensorData);
});

router.get('/latest', (req, res) => {
    const latest = sensorData[sensorData.length - 1] || {};
    res.json(latest);
});

module.exports = router;
