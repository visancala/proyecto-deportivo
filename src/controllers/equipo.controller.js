import axios from 'axios'
import {TOKEN} from '../config.js'


export const getEquipo = (req,res) => {
    res.render('equipo')
}



export const getPosts = async (req,res) => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
    //console.log (response.data)
    res.render('posts', {
        posts: response.data
    })
}


export const getBetsapi = async (req,res) => {
    const token=TOKEN
    const temp_id=207
    //const url='https://api.betsapi.com/v1/events/inplay?sport_id=1&token='+token    
    const clasificacion='https://api.betsapi.com/v2/league/table?&token='+token+'&league_id='+temp_id
    console.log(clasificacion)
    //let response = await fetch(clasificacion)
    const response = await axios.get(clasificacion) 
    const tabla = response.data['results']['overall']['tables'][0]    
    res.render('betsapi', { tabla })
}