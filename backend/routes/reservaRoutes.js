const express = require('express');
const router = express.Router();
const db = require('../db');

// Obtener reservas
router.get('/reservas', (req, res) => {

    db.query('SELECT * FROM reserva', (err, result) => {

        if (err) {
            return res.status(500).json(err);
        }

        res.json(result);

    });

});

// Registrar reserva
router.post('/reservas', (req, res) => {

    const { id_usuario, fecha_reserva, cantidad_personas } = req.body;

    const sql = `
        INSERT INTO reserva(id_usuario, fecha_reserva, cantidad_personas)
        VALUES (?, ?, ?)
    `;

    db.query(sql, [id_usuario, fecha_reserva, cantidad_personas], (err, result) => {

        if (err) {
            return res.status(500).json(err);
        }

        res.json({
            mensaje: 'Reserva registrada correctamente'
        });

    });

});

module.exports = router;