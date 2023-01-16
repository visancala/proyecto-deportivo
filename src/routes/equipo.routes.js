
//const axios = require('axios') //para hacer peticiones get
//const { Router } = require('express')

import { Router } from 'express'
import { getEquipo, getPosts, getBetsapi } from '../controllers/equipo.controller.js'

const router = Router()

router.get('/equipo',getEquipo)

router.get('/posts',getPosts)

router.get('/betsapi',getBetsapi)


export default router


 /*const token="7865-b0PXlPMI94xvu3"
    const temp_id=207
    //const url='https://api.betsapi.com/v1/events/inplay?sport_id=1&token='+token

    const partidos='https://api.betsapi.com/v2/events/upcoming?sport_id=1&token='+token+'&league_id='+temp_id
    const finalizados='https://api.betsapi.com/v2/events/ended?sport_id=1&token='+token+'&league_id='+temp_id
    const clasificacion='https://api.betsapi.com/v2/league/table?&token='+token+'&league_id='+temp_id

    console.log(clasificacion)

    let response = await fetch(clasificacion);

    let clasi=''
      let json = await response.json();
      console.log(json.results['overall'].tables[0].name)
      console.log(json.results['overall'].tables[0].currentround)
      console.log(json.results['overall'].tables[0].maxrounds)
      const fila=json.results['overall'].tables[0].rows

      console.log(fila[0])


      for (let i=0; fila.length<1 ; i++){
        console.log(fila[i].pos)
        console.log(fila[i].team)
      }
    //document.getElementById('tabla').innerHTML.clasi
    res.json(rows[0]);

  */

