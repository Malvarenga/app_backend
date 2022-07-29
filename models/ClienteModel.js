//importamos la conexion a la bd
import db from '../database/db.js';

//importamos sequelize
import { DataTypes } from "sequelize";

const ClienteModel = db.define('clientes', {
    Nombres: {type:DataTypes.STRING},
    Apellidos: {type:DataTypes.STRING},
    Contacto: {type:DataTypes.STRING},
    Correo: {type:DataTypes.STRING},
    Estado: {type:DataTypes.NUMBER}
})

export default ClienteModel