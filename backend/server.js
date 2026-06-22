require('dotenv').config();
const express = require('express');
const cors = require('cors');

const authRoutes = require('./routes/authRoutes');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api', authRoutes);

app.get('/', (req, res) => {
    res.send('Servidor funcionando');
});

app.listen(process.env.PORT, () => {
    console.log(`Servidor en puerto ${process.env.PORT}`);
});