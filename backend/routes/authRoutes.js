const express = require('express');
const router = express.Router();
const db = require('../db');
const jwt = require('jsonwebtoken');

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

router.post('/login', (req, res) => {

    const { email, password } = req.body;

    const sql = 'SELECT * FROM usuario WHERE email = ? AND password = ?';

    db.query(sql, [email, password], (err, result) => {

        if (err) {
            return res.status(500).json(err);
        }

        if (result.length === 0) {
            return res.status(401).json({
                mensaje: 'Credenciales incorrectas'
            });
        }

        const token = jwt.sign(
            {
                id: result[0].id_usuario,
                rol: result[0].rol
            },
            process.env.JWT_SECRET,
            {
                expiresIn: '1h'
            }
        );

        res.json({
            mensaje: 'Login exitoso',
            token
        });

    });

});

module.exports = router;