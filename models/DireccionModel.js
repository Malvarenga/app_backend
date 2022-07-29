//importamos la conexion a la bd
import db from '../database/db.js';

//importamos sequelize
import { DataTypes } from "sequelize";

const DireccionModel = db.define('direcciones', {
    Municipio: {type:DataTypes.STRING},
    Departamento: {type:DataTypes.STRING},
    Complemento: {type:DataTypes.STRING},
    Estado: {type:DataTypes.NUMBER}
})

export default DireccionModel