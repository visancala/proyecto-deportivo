import { Router } from 'express'
import { getInicio } from '../controllers/index.controller.js'

const router = Router()

router.get('/inicio', getInicio)

export default router