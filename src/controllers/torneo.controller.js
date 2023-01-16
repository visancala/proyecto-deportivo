import { pool } from "../db.js";

export const getTorneos = async (req, res) => {
  try {
    //throw new error('My error')
    const [rows] = await pool.query(
      "SELECT id, nombre, comunidad_id, categoria_id FROM torneo WHERE id>0 LIMIT 10"
    );
    res.json(rows);
  } catch (error) {
    return res.status(500).send("Algo fué mal en el servidor");
    //return res.send(error)
  }
};

export const getTorneo = async (req, res) => {
  try {
    console.log(req.params.id);
    const [rows] = await pool.query(
      "SELECT * FROM torneo WHERE id=?",
      [req.params.id]
    );

    if (rows.length <= 0)
      return res.status(404).json({
        message: "Torneo no found",
      });
    res.json(rows[0]);
  } catch (error) {
    return res.status(500).send("Algo fué mal en el servidor");
  }
};

/*export const getTorneo = (req, res) => {
  //console.log(req.body) //vienen desde form,json,stc
  //console.log(req.params) //vienen desde la url separada por slash
  //para forzar números parseInt
  //console.log(req.query) //vienen desde la url con ? y & ejem. paginación
  const { id, vista } = req.params;
  const { j, ac } = req.query;
  if (parseInt(id) === 1) {
    return res.send(`${id} División ${vista} - jornadas ${j} - activa ${ac}`); //con return evitamos que el código continue
  }
  res.send(`${id} División ${vista} - limitada`);
};*/

export const crearTorneo = async (req, res) => {
  const { id_ext_tor, pais_id, comunidad_id, orden, categoria_id, nombre } = req.body;
  try {
    const [rows] = await pool.query(
      "INSERT INTO torneo (betsapi, pais_id, comunidad_id, orden, categoria_id, nombre) VALUES (?,?,?,?,?,?)",
      [id_ext_tor, pais_id, comunidad_id, orden, categoria_id, nombre]
    );
    console.log(req.body)
    
    res.send({
      id: rows.insertId,
      id_ext_tor, 
      pais_id,
      comunidad_id,
      orden,
      categoria_id,
      nombre,
    })
  } catch (error) {
    return res.status(500).send("Algo fué mal en el servidor");
  }
}

export const updateTorneo = async (req, res) => {
  const { id } = req.params;
  const { nombre, comunidad_id } = req.body;
  try {
    //const [result] = await pool.query('UPDATE torneo SET nombre = ?, comunidad_id = ? WHERE id=?',[nombre, comunidad_id, id])
    const [result] = await pool.query(
      "UPDATE torneo SET nombre = IFNULL(?,nombre), comunidad_id = IFNULL(?,comunidad_id) WHERE id=?",
      [nombre, comunidad_id, id]
    );
    console.log(result);
    if (result.affectedRows === 0)
      return res.status(404).json({
        message: "Torneo no found",
      });

    const [rows] = await pool.query("SELECT * FROM torneo WHERE id=?", [id]);

    res.json(rows[0]);
  } catch (error) {
    return res.status(500).send("Algo fué mal en el servidor");
  }
}

export const deleteTorneo = async (req, res) => {
  console.log(req.params.id);
  try {
    const [result] = await pool.query("DELETE FROM torneo WHERE id=?", [
      req.params.id,
    ]);

    if (result.affectedRows <= 0)
      return res.status(404).json({
        message: "Torneo no found",
      });
    res.sendStatus(204);
  } catch (error) {
    return res.status(500).send("Algo fué mal en el servidor");
  }
}

