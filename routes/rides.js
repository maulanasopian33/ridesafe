const express = require('express');
const router = express.Router();
const { ride_data } = require('../models');

// Endpoint untuk menyimpan data kecepatan
router.post('/', async (req, res) => {
    try {
        const { timestamp, speed, latitude, longitude } = req.body;

        const Ridedata = await ride_data.create({
            timestamp,
            speed,
            latitude,
            longitude
        });

        return res.status(201).json({ message: "Data saved successfully", Ridedata });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});

// Endpoint untuk mendapatkan semua data
router.get('/', async (req, res) => {
    try {
        const Ridedata = await ride_data.findAll();
        return res.status(200).json(Ridedata);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});

module.exports = router;
