import Usuario from "../models/usuario";

const usuarioCtrl = {};

usuarioCtrl.listarUsuarios = async (req, res) => {
  try {
      //buscar en la bd la coleccion de productos
      const listaUsuarios = await Usuario.find();
      //enviar resp
      res.status(200).json(listaUsuarios);
  } catch (error) {
    console.log(error);
    res.status(404).json({
      mensaje: "Error al buscar los usuarios",
    });
  }
};
//logica para traer los pacientes.

usuarioCtrl.crearUsuario = async (req, res) => {
  try {
    //body
    //crear un objeto para guardar en la base de datos.
    const usuarioNuevo = new Usuario({
      userName: req.body.userName,
      pass: req.body.pass,
    });
    //guardo en la base de datos
    await usuarioNuevo.save();

    //enviar resp
    res.status(201).json({
      mensaje: "El usuario fue creado correctamente",
    });
  } catch (error) {
    console.log(error);
    res.status(404).json({
      mensaje: "Error al intentar agregar un usuario",
    });
  }
};

export default usuarioCtrl;
