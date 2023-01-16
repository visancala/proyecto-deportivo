import { createPool } from 'mysql2/promise'

import {
    DB_HOST,
    DB_PORT,
    DB_USER,
    DB_PASSWORD,
    DB_DATABASE
} from './config.js'

export const pool = createPool({
    host: DB_HOST,
    user: DB_USER,
    password: DB_PASSWORD,
    port: DB_PORT,
    database: DB_DATABASE
})

/*const mysql = require('mysql2/promise')

async function conectDB() {
    const conection = await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'cojo',
        database: 'futbolme_nueva'
    })
    
    const result = await conection.query ('SELECT nombre FROM torneo WHERE id=2')
    //console.log(result)
}

module.exports = conectDB*/
