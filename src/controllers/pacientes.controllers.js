import Paciente from "../models/paciente";
import {
  validarEdad,
  validarEmail,
  validarEspecie,
  validarNombre,
  validarNombreHum,
  validarRaza,
  validarTel,
} from "../helpers/ValidacionesPacientes";

const pacienteCtrl = {};

pacienteCtrl.listarPacientes = (req, res) => {
  //logica para traer los pacientes.
  res.send("aqui enviaria la lista de pacientes");
};

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
        mensaje:"El paciente fue creado correctamente"
    })
  } catch (error) {
    console.log(error);
    res.status(404).json({
      mensaje: "Error al intentar agregar un paciente",
    });
  }
};

export default pacienteCtrl;
