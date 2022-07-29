//Importamos la Conexion a la BD
import db from "../database/db.js";
import {QueryTypes} from "sequelize";

//Importamos el Modelo
import TipoDocumentoModel from "../models/TipoDocumentoModel.js";
import ClienteDocumentoModel from "../models/ClienteDocumentoModel.js";

/* METODOS PARA EL CRUD DOCUMENTOS */

/* Mostrar todos los registros */
export const getAllDocumentos = async (req, res) => {
    try {
        const documentos = await db.query(`SELECT td.id, td.Nombre, td.Valor FROM tipodocumentos td INNER JOIN clientedocumentos cd ON td.id = cd.idTipoDocumentos WHERE td.Estado = 1 AND cd.idClientes = ${req.params.id}`, { type: QueryTypes.SELECT })
        res.json(documentos)
    }catch (error) {
        res.json( {message: error.message} )
    }
}

/* Mostrar un registros */
export const getDocumento = async (req, res) => {
    try {
        const documento = await TipoDocumentoModel.findByPk(req.params.id)
        res.json(documento)
    }catch (error) {
        res.json( {message: error.message} )
    }
}

/* Crear un registro */
export const createDocumento = async (req, res) => {
    try {
        const ultimoID = await TipoDocumentoModel.create(req.body)
        await ClienteDocumentoModel.create({
            idClientes: req.body.idCliente,
            idTipoDocumentos: ultimoID.id
        });
        res.json({'message':`Registro Creado Correctamente!!!`})
    }catch (error) {
        res.json( {message: error.message} )
    }
}

/* Actualizar un registro */
export const updateDocumento = async (req, res) => {
    try {
        await TipoDocumentoModel.update(req.body, {
            where: {id:req.params.id }
        })
        res.json({'message':'Registro Actualizado Correctamente!!!'})
    }catch (error) {
        res.json( {message: error.message} )
    }
}

/* Eliminar un registro */
export const deleteDocumento = async (req, res) => {
    try {
        await TipoDocumentoModel.update({Estado:0}, {
            where: {id:req.params.id }
        })
        res.json({'message':'Registro Eliminado Correctamente!!!'})
    }catch (error) {
        res.json( {message: error.message} )
    }
}