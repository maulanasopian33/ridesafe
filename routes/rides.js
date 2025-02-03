const express = require('express');
const router = express.Router();
const { ride_data } = require('../models');
const { Op } = require("sequelize");
const moment = require("moment");


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
        const startOfDay = moment().startOf("day").toDate(); // Awal hari ini (00:00:00)
        const endOfDay = moment().endOf("day").toDate();
        const Ridedata = await ride_data.findAll({
            where: {
              createdAt: {
                [Op.gte]: startOfDay,
                [Op.lt]: endOfDay,
              },
            },
          });
        return res.status(200).json(Ridedata);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});

module.exports = router;
