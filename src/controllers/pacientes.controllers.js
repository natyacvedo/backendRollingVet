import Paciente from "../models/paciente";

const pacienteCtrl = {};

pacienteCtrl.listarPacientes = async (req, res) => {
  try {
      //buscar en la bd la coleccion de productos
      const listaPacientes = await Paciente.find();
      //enviar resp
      res.status(200).json(listaPacientes);
  } catch (error) {
    console.log(error);
    res.status(404).json({
      mensaje: "Error al buscar los productos",
    });
  }
};
//logica para traer los pacientes.
pacienteCtrl.crearPaciente = async (req, res) => {
  try {
    //body
    //crear un objeto para guardar en la base de datos.
    const pacienteNuevo = new Paciente({
      nombreHum: req.body.nombreHum,
      email: req.body.email,
      tel: req.body.tel,
      nombre: req.body.nombre,
      especie: req.body.especie,
      raza: req.body.raza,
      edad: req.body.edad,
    });
    //guardo en la base de datos
    await pacienteNuevo.save();

    //enviar resp
    res.status(201).json({
      mensaje: "El paciente fue creado correctamente",
    });
  } catch (error) {
    console.log(error);
    res.status(404).json({
      mensaje: "Error al intentar agregar un paciente",
    });
  }
};

pacienteCtrl.obtenerPaciente =async(req,res)=>{
  try {
   console.log(req.params.id);
   const pacienteBuscado = await Paciente.findById(req.params.id);
   res.status(200).json(pacienteBuscado);
  } catch (error) {
    console.log(error);
    res.status(404).json({
      mensaje: "Error al buscar un paciente",
    });
  }
}

pacienteCtrl.editarPaciente = async(req,res)=>{
  try {
    console.log(req.params.id);
    console.log(req.body);

    await Paciente.findByIdAndUpdate(req.params.id,req.body);
    res.status(200).json({mensaje:'se editó correctamente'})
    
  } catch (error) {
    console.log(error);
    res.status(404).json({
      mensaje: "Error al editar un paciente",
    });
  }
}

pacienteCtrl.borrarPaciente = async ( req,res) => {
  try {
    //buscar por id y borrar
    await Paciente.findByIdAndDelete(req.params.id)
    res.status(200).json({mensaje:'El paciente fue eliminado'});
    
  } catch (error) {    console.log(error);
    res.status(404).json({
      mensaje: "Error al borrar un paciente",
    });
  }
}

export default pacienteCtrl;
