import { Router } from 'express';
import usuarioCtrl from '../controllers/usuarios.controllers';


const routerUser = Router();

routerUser.route('/user').get(usuarioCtrl.listarUsuarios).post(usuarioCtrl.crearUsuario)



export default routerUser