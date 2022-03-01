import { Router } from "express";
import turnoCtrl from '../controllers/turnos.controllers';

const rutas = Router();

rutas.route('/ListadoTurnos').get(turnoCtrl.listadoTurnos);



export default rutas;