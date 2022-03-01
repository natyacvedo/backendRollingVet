import Turno from "../models/turno";

const turnoCtrl = {};

turnoCtrl.listadoTurnos = (req, res) => {
  res.send("aqui enviaria la lista de turnos");
};

turnoCtrl.crearTurno = (req, res) => {
  try {
      
    const turnoNuevo = new Turno({
      profesional: req.body.profesional,
      startDate: req.body.startDate,
      nombreMascota: req.body.nombreMascota,
      motivoConsulta: req.body.motivoConsulta,
    });
  } catch (error) {
    console.log(error);
    res.status(404).json({
      mensaje: "error al intentar agregar un turno",
    });
  }
};

export default turnoCtrl;
