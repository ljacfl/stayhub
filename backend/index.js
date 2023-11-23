const express = require('express')

//Crear express app
const app = express();



//rutas
app.get('/', (req, res) => {
    res.json({
        ok:true
    })
})


//Escuchar en puerto 4000

app.listen(4000, () => {
    console.log('Servidor corriendo en puerto: ', 4000)
})