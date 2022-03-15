import Turno from "../models/turno";

const turnoCtrl = {};

turnoCtrl.listarTurnos = async (req, res) => {
  try {
    //buscar en la bd la coleccion de productos
    const listaTurnos = await Turno.find();
    //enviar resp
    res.status(200).json(listaTurnos);
  } catch (error) {
    console.log(error);
    res.status(404).json({
      mensaje: "Error al buscar los Turnos",
    });
  }
};

turnoCtrl.crearTurno = async (req, res) => {
  try {
    const turnoNuevo = new Turno({
      profesional: req.body.profesional,
      startDate: req.body.startDate,
      nombreMascota: req.body.nombreMascota,
      motivoConsulta: req.body.motivoConsulta,
    });
    //guardo en la base de datos
    await turnoNuevo.save();

    //enviar resp
    res.status(201).json({
      mensaje: "El turno fue creado correctamente",
    });
  } catch (error) {
    console.log(error);
    res.status(404).json({
      mensaje: "error al intentar agregar un turno",
    });
  }
};
//linea marcos
turnoCtrl.obtenerTurno =async(req,res)=>{
  try {
   console.log(req.params.id);
   const turnoBuscado = await Turno.findById(req.params.id);
   res.status(200).json(turnoBuscado);
  } catch (error) {
    console.log(error);
    res.status(404).json({
      mensaje: "Error al buscar un paciente",
    });
  }
}

turnoCtrl.editarTurno = async (req, res) => {
  try {
    console.log(req.params.id);
    console.log(req.body);

    await Turno.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).json({ mensaje: "se editó correctamente el turno" });
  } catch (error) {
    console.log(error);
    res.status(404).json({
      mensaje: "Error al editar un turno",
    });
  }
};

turnoCtrl.borrarTurno = async (req, res) => {
  try {
    //buscar por id y borrar
    await Turno.findByIdAndDelete(req.params.id);
    res.status(200).json({ mensaje: "El Turno fue eliminado" });
  } catch (error) {
    console.log(error);
    res.status(404).json({
      mensaje: "Error al borrar un Turno",
    });
  }
};

export default turnoCtrl;
