const express = require('express');
const router = express.Router();
const db = require('../db');

// Obtener pedidos
router.get('/pedidos', (req, res) => {

    db.query('SELECT * FROM pedido', (err, result) => {

        if (err) {
            return res.status(500).json(err);
        }

        res.json(result);

    });

});

// Registrar pedido
router.post('/pedidos', (req, res) => {

    const { id_usuario, total, estado, latitud, longitud } = req.body;

    const sql = `
        INSERT INTO pedido(id_usuario, total, estado, latitud, longitud)
        VALUES (?, ?, ?, ?, ?)
    `;

    db.query(sql, [id_usuario, total, estado, latitud, longitud], (err, result) => {

        if (err) {
            return res.status(500).json(err);
        }

        res.json({
            mensaje: 'Pedido registrado correctamente'
        });

    });

});

module.exports = router;