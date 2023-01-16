import { Router } from 'express'
import { getJugador } from '../controllers/jugador.controller.js'

const router = Router()

router.get('/jugador', getJugador)

export default router