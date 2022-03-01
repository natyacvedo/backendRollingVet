import { Router } from "express";
import pacienteCtrl from "../controllers/pacientes.controllers";

const router = Router();

router
  .route("/pacientes")
  .get(pacienteCtrl.listarPacientes)
  .post(pacienteCtrl.crearPaciente);

router
  .route("/pacientes/:id")
  .get(pacienteCtrl.obtenerPaciente)
  .put(pacienteCtrl.editarPaciente)
  .delete(pacienteCtrl.borrarPaciente);

export default router;
