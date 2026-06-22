function procesarPago(monto, metodo) {

    return {
        codigo_pago: "PAY" + Date.now(),
        monto: monto,
        metodo: metodo,
        estado: "aprobado"
    };

}

module.exports = { procesarPago };