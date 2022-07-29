//importamos la conexion a la bd
import db from '../database/db.js';

//importamos sequelize
import { DataTypes } from "sequelize";

const TipoDocumentoModel = db.define('tipodocumentos', {
    Nombre: {type:DataTypes.STRING},
    Valor: {type:DataTypes.STRING},
    Estado: {type:DataTypes.NUMBER}
})

export default TipoDocumentoModel