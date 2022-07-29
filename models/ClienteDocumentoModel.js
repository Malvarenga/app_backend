//importamos la conexion a la bd
import db from '../database/db.js';

//importamos sequelize
import { DataTypes } from "sequelize";

const ClienteDocumentoModel = db.define('clientedocumentos', {
    idClientes: {type:DataTypes.NUMBER},
    idTipoDocumentos: {type:DataTypes.NUMBER}
})

export default ClienteDocumentoModel