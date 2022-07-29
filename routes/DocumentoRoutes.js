import express  from 'express'
import {
    createDocumento,
    deleteDocumento,
    getAllDocumentos,
    getDocumento,
    updateDocumento
} from "../controllers/DocumentoController.js";


const router = express.Router()

router.get('/view/:id', getAllDocumentos)
router.get('/:id', getDocumento)
router.post('/', createDocumento)
router.put('/:id', updateDocumento)
router.delete('/:id', deleteDocumento)

export default router