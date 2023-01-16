import express from 'express'
import morgan from 'morgan'
import path from 'path'


const __dirname = new URL('.', import.meta.url).pathname;
const newStr = __dirname.slice(1)
console.log(newStr)

const app = express()

import torneoRutas from './routes/torneo.routes.js'
import equipoRutas from './routes/equipo.routes.js'
import jugadorRutas from './routes/jugador.routes.js'
import partidoRutas from './routes/partido.routes.js'



//seetings
app.set('view engine','ejs')
app.set('views',path.join(newStr,'views'))

//middlewhares
app.use(express.text()) //para que express entienda la petición del cliente
app.use(express.json()) //entienda la petición del cliente como json
app.use(express.urlencoded({extended:false})) // la petición del cliente como formulario (extended para datos sencillos.)

app.use(morgan('dev'))


const datos=[];
//app.all() poco frecuente


app.get('/logo', (req,res) => {
    res.sendFile('./public/logo.png', {root: 'src'})
})
app.get('/datos', (req,res) => {
    res.json(datos)
})
app.get('/estaVivo', (req,res) => {
    res.sendStatus(204)
})


app.use(torneoRutas)
app.use(equipoRutas)
app.use(jugadorRutas)
app.use(partidoRutas)

/*app.use((req,res,next) => {
    if (req.query.login === 'futbolme'){
        next() 
    } else {
        res.send('No tiene permisos')
    }    
})

app.get('/panel', (req,res) => {
    res.send('Panel de control')
})*/

//la parte publica siempre al final de todos los procesos
app.use(express.static(path.join(newStr,'./public')))
//app.use('/public',express.static('./public')) con prefijo
//app.use('/otraruta',express.static('./otraruta')) con prefijo
app.use((req,res,next) => {
    res.status(400).send('Página no encontrada')
})

export default app