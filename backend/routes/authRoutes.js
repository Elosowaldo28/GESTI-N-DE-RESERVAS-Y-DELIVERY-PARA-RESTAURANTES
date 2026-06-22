const express = require('express');
const router = express.Router();
const db = require('../db');

router.get('/register', (req, res) => {
    res.send('Ruta register funcionando');
});

router.post('/register', (req, res) => {
    const { nombre, email, password, rol } = req.body;

    const sql = 'INSERT INTO usuario(nombre,email,password,rol) VALUES (?,?,?,?)';

    db.query(sql, [nombre, email, password, rol], (err, result) => {
        if (err) {
            return res.status(500).json(err);
        }

        res.json({
            mensaje: 'Usuario registrado correctamente'
        });
    });
});

module.exports = router;