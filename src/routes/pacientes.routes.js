import { Router } from 'express';
import pacienteCtrl from '../controllers/pacientes.controllers';


const router = Router();

router.route('/pacientes').get(pacienteCtrl.listarPacientes).post(pacienteCtrl.crearPaciente)



export default router