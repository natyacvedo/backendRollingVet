import { Router } from 'express';
import comentarioCtrl from '../controllers/comentarios.controllers';


const routerComent = Router();

routerComent.route('/comentarios').get(comentarioCtrl.listarComentarios).post(comentarioCtrl.crearComentario)



export default routerComent