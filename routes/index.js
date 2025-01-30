const express = require('express');
const router = express.Router();

// Endpoint untuk mendapatkan semua data
router.get('/', async (req, res) => {
    res.send('Aktif');
});

module.exports = router;
