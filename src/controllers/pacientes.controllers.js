import Paciente from "../models/paciente";

const pacienteCtrl = {};

pacienteCtrl.listarPacientes = async (req, res) => {
  try {
      //buscar en la bd la coleccion de productos
      const listaPacientes = await Paciente.find();
      //enviar resp
      
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

export default pacienteCtrl;
