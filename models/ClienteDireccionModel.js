//importamos la conexion a la bd
import db from '../database/db.js';

//importamos sequelize
import { DataTypes } from "sequelize";

const ClienteDireccionModel = db.define('clientesdirecciones', {
    idClientes: {type:DataTypes.NUMBER},
    idDirecciones: {type:DataTypes.NUMBER}
})

export default ClienteDireccionModel