const express = require('express');
const router = express.Router();
const db = require('../db');

// Obtener todos los platos
router.get('/platos', (req, res) => {

    db.query('SELECT * FROM plato', (err, result) => {

        if (err) {
            return res.status(500).json(err);
        }

        res.json(result);

    });

});

router.post('/platos', (req, res) => {

    const { nombre, precio, stock } = req.body;

    const sql = 'INSERT INTO plato(nombre, precio, stock) VALUES (?, ?, ?)';

    db.query(sql, [nombre, precio, stock], (err, result) => {

        if (err) {
            return res.status(500).json(err);
        }

        res.json({
            mensaje: 'Plato agregado correctamente'
        });

    });

});

module.exports = router;