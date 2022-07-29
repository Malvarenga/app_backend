import express from "express";
import cors from "cors";

//importamos la conexion a la BD
import db from "./database/db.js";
//importamos nuestro enrutador
import clienteRoutes from './routes/ClienteRoutes.js'
import direccionRoutes from './routes/DireccionRoutes.js'
import documentoRoutes from './routes/DocumentoRoutes.js'

const app = express()
app.use(cors())
app.use(express.json())
app.use('/clientes', clienteRoutes)
app.use('/direcciones', direccionRoutes)
app.use('/documentos', documentoRoutes)

try {
    await db.authenticate()
}catch (error) {
    console.log(`Error en Conexion: ${error}`)
}

app.get('/', (req, res)=>{
    res.send('Bienvenido a la API...')
})

app.listen(8000, () => {
    console.log('Servidor Corriendo en http://localhost:8000/')
})