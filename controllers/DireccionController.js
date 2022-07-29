//Importamos la Conexion a la BD
import db from "../database/db.js";
import {QueryTypes} from "sequelize";

//Importamos el Modelo
import DireccionModel from "../models/DireccionModel.js";
import ClienteDireccionModel from "../models/ClienteDireccionModel.js";
import TipoDocumentoModel from "../models/TipoDocumentoModel.js";

/* METODOS PARA EL CRUD DIRECCIONES */

/* Mostrar todos los registros */
export const getAllDirecciones = async (req, res) => {
    try {
        const direcciones = await db.query(`SELECT d.id, d.Municipio, d.Departamento, d.Complemento FROM direcciones d INNER JOIN clientesdirecciones cd ON d.id = cd.idDirecciones WHERE d.Estado = 1 AND cd.idClientes = ${req.params.id}`, { type: QueryTypes.SELECT })
        res.json(direcciones)
    }catch (error) {
        res.json( {message: error.message} )
    }
}

/* Mostrar un registros */
export const getDireccion = async (req, res) => {
    try {
        const direccion = await DireccionModel.findByPk(req.params.id)
        res.json(direccion)
    }catch (error) {
        res.json( {message: error.message} )
    }
}

/* Crear un registro */
export const createDireccion = async (req, res) => {
    try {
        const ultimoID = await DireccionModel.create(req.body)
        await ClienteDireccionModel.create({
            idClientes: parseInt(req.body.idCliente),
            idDirecciones: ultimoID.id
        });
        res.json({'message':`Registro Creado Correctamente!!!`})
    }catch (error) {
        res.json( {message: error.message} )
    }
}

/* Actualizar un registro */
export const updateDireccion = async (req, res) => {
    try {
        await DireccionModel.update(req.body, {
            where: {id:req.params.id }
        })
        res.json({'message':'Registro Actualizado Correctamente!!!'})
    }catch (error) {
        res.json( {message: error.message} )
    }
}

/* Eliminar un registro */
export const deleteDireccion = async (req, res) => {
    try {
        await DireccionModel.update({Estado:0}, {
            where: {id:req.params.id }
        })
        res.json({'message':'Registro Eliminado Correctamente!!!'})
    }catch (error) {
        res.json( {message: error.message} )
    }
}