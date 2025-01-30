const express = require('express');
const router = express.Router();
const { RideData } = require('../models');

// Endpoint untuk menyimpan data kecepatan
router.post('/', async (req, res) => {
    try {
        const { timestamp, speed, latitude, longitude } = req.body;

        const rideData = await RideData.create({
            timestamp,
            speed,
            latitude,
            longitude
        });

        return res.status(201).json({ message: "Data saved successfully", rideData });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});

// Endpoint untuk mendapatkan semua data
router.get('/', async (req, res) => {
    try {
        const rideData = await RideData.findAll();
        return res.status(200).json(rideData);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});

module.exports = router;
