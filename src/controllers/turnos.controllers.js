const turnoCtrl = {};

turnoCtrl.listadoTurnos = (req, res) => {
  res.send("aqui enviaria la lista de turnos");
};

turnoCtrl.crearTurno = (req, res) => {
    console.log(req.body);
  res.send("doy de alta un turno");
};

export default turnoCtrl;
