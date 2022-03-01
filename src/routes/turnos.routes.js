import { Router } from "express";
import turnoCtrl from '../controllers/turnos.controllers';

const rutas = Router();

rutas.route('/ListadoTurnos').get(turnoCtrl.listadoTurnos).post(turnoCtrl.crearTurno)



export default rutas;