import express  from 'express'
import {
    createDireccion,
    deleteDireccion,
    getAllDirecciones,
    getDireccion,
    updateDireccion
} from "../controllers/DireccionController.js";

const router = express.Router()

router.get('/view/:id', getAllDirecciones)
router.get('/:id', getDireccion)
router.post('/', createDireccion)
router.put('/:id', updateDireccion)
router.delete('/:id', deleteDireccion)

export default router