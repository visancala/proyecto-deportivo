import { Router } from 'express'
import { getPartido } from '../controllers/partido.controller.js'

const router = Router()

router.get('/partido', getPartido)

//module.exports = router
export default router