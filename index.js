require('dotenv').config();
const express = require('express');
const cors = require('cors');
const ridesRoutes = require('./routes/rides');
const indexRoutes = require('./routes/index');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use('/', indexRoutes);
app.use('/api/rides', ridesRoutes);

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
