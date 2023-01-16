//const express = require('express')
import { Router } from 'express'
import { getTorneos, getTorneo, crearTorneo, updateTorneo, deleteTorneo } from '../controllers/torneo.controller.js'

const router = Router()

//router.get('/torneo/:id/:vista', getTorneo)

router.get('/torneo', getTorneos)
router.get('/torneo/:id', getTorneo)

router.post('/torneo', crearTorneo)

router.patch('/torneo/:id', updateTorneo)

router.delete('/torneo/:id', deleteTorneo)



//module.exports = router
export default router