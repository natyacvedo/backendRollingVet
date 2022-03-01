import Comentario from "../models/comentario";

const comentarioCtrl = {};

comentarioCtrl.listarComentarios = async (req, res) => {
  try {
      //buscar en la bd la coleccion de productos
      const listaComentario = await Comentario.find();
      //enviar resp
      res.status(200).json(listaComentario);
  } catch (error) {
    console.log(error);
    res.status(404).json({
      mensaje: "Error al buscar los Comentarios",
    });
  }
};
//logica para traer los pacientes.

comentarioCtrl.crearComentario = async (req, res) => {
  try {
    //body
    //crear un objeto para guardar en la base de datos.
    const comentarioNuevo = new Comentario({
      texto: req.body.texto,
      nombreCom: req.body.nombreCom,
    
    });
    //guardo en la base de datos
    await comentarioNuevo.save();

    //enviar resp
    res.status(201).json({
      mensaje: "El comentaro fue creado correctamente",
    });
  } catch (error) {
    console.log(error);
    res.status(404).json({
      mensaje: "Error al intentar agregar un comentario",
    });
  }
};

export default comentarioCtrl;