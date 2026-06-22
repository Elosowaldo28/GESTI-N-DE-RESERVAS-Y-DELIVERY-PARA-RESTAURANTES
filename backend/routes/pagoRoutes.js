const express = require('express');
const router = express.Router();

const { procesarPago } = require('../services/pagoService');

router.post('/pagos', (req, res) => {

    const { monto, metodo } = req.body;

    const resultado = procesarPago(monto, metodo);

    res.json({
        mensaje: "Pago realizado correctamente",
        pago: resultado
    });

});

module.exports = router;