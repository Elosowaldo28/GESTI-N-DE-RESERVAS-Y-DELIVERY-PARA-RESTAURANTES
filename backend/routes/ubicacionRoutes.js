const express = require('express');
const router = express.Router();
const axios = require('axios');

router.get('/clima', async (req, res) => {

    try {

        const respuesta = await axios.get(
            'https://api.open-meteo.com/v1/forecast?latitude=-16.3989&longitude=-71.5350&current_weather=true'
        );

        res.json(respuesta.data);

    } catch (error) {

        res.status(500).json({
            mensaje: 'Error al consultar la API',
            error: error.message
        });

    }

});

module.exports = router;