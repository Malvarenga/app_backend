//importamos el Modelo
import ClienteModel from "../models/ClienteModel.js";

/* METODOS PARA EL CRUD CLIENTE */

/* Mostrar todos los registros */
export const getAllClientes = async (req, res) => {
    try{
        const cliente = await ClienteModel.findAll({
            where: { Estado:1 }
        })
        res.json(cliente)
    }catch (error){
        res.json( {message: error.message} )
    }
}

/* Mostrar un registros */
export const getCliente = async (req, res) => {
    try {
        const cliente = await ClienteModel.findByPk(req.params.id)
        res.json(cliente)
    }catch (error) {
        res.json( {message: error.message} )
    }
}

/* Crear un registro */
export const createCliente = async (req, res) => {
    try {
        const result = await ClienteModel.create(req.body)
        res.json({'message':`Registro Creado Correctamente!!! ${result.id}`})
    }catch (error) {
        res.json( {message: error.message} )
    }
}

/* Actualizar un registro */
export const updateCliente = async (req, res) => {
    try {
        await ClienteModel.update(req.body, {
            where: {id:req.params.id }
        })
        res.json({'message':'Registro Actualizado Correctamente!!!'})
    }catch (error) {
        res.json( {message: error.message} )
    }
}

/* Eliminar un registro */
export const deleteCliente = async (req, res) => {
    try {
        await ClienteModel.update({Estado:0}, {
            where: {id:req.params.id }
        })
        res.json({'message':'Registro Eliminado Correctamente!!!'})
    }catch (error) {
        res.json( {message: error.message} )
    }
}