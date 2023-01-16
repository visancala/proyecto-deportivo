export const getJugador = (req,res) => {

    let isActive = true

    const jugador = 'Feliciano'
    
    res.render('jugador.ejs', { jugador, isActive })
}