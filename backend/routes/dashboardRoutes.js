const express = require('express');
const router = express.Router();
const db = require('../db');

router.get('/dashboard', (req, res) => {

    const datos = {};

    db.query('SELECT COUNT(*) AS usuarios FROM usuario', (err, usuarios) => {

        if (err) return res.status(500).json(err);

        datos.usuarios = usuarios[0].usuarios;

        db.query('SELECT COUNT(*) AS platos FROM plato', (err, platos) => {

            if (err) return res.status(500).json(err);

            datos.platos = platos[0].platos;

            db.query('SELECT COUNT(*) AS reservas FROM reserva', (err, reservas) => {

                if (err) return res.status(500).json(err);

                datos.reservas = reservas[0].reservas;

                db.query('SELECT COUNT(*) AS pedidos FROM pedido', (err, pedidos) => {

                    if (err) return res.status(500).json(err);

                    datos.pedidos = pedidos[0].pedidos;

                    res.json(datos);

                });

            });

        });

    });

});

module.exports = router;