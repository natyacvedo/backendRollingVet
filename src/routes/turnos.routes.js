import { Router } from "express";
import turnoCtrl from "../controllers/turnos.controllers";

const rutas = Router();

rutas
  .route("/ListadoTurnos")
  .get(turnoCtrl.listarTurnos)
  .post(turnoCtrl.crearTurno);

rutas
  .route("/ListadoTurnos/:id")
  .get(turnoCtrl.obtenerTurno)
  .put(turnoCtrl.editarTurno)
  .delete(turnoCtrl.borrarTurno);

export default rutas;
