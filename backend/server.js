require('dotenv').config();
const express = require('express');
const cors = require('cors');

const authRoutes = require('./routes/authRoutes');
const platoRoutes = require('./routes/platoRoutes');
const reservaRoutes = require('./routes/reservaRoutes');
const pedidoRoutes = require('./routes/pedidoRoutes');
const dashboardRoutes = require('./routes/dashboardRoutes');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api', authRoutes);
app.use('/api', platoRoutes);
app.use('/api', reservaRoutes);
app.use('/api', pedidoRoutes);
app.use('/api', dashboardRoutes);

app.get('/', (req, res) => {
    res.send('Servidor funcionando');
});

app.listen(process.env.PORT, () => {
    console.log(`Servidor en puerto ${process.env.PORT}`);
});