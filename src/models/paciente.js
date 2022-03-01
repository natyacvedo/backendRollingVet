import mongoose, {Schema} from 'mongoose';

const pacienteSchema = new Schema({
    nombreHum:{
        type: String,
        required:true
    },
    email:{
        type: String,
        required:true,
        unique:true
    },
    tel:{
        type:Number,
        required:true
    },
    especie:{
        type: String,
        required:true
    },
    raza:{
        type: String,
        required:true
    },
    edad:{
        type: Number,
        required:true
    }
});

const Paciente = mongoose.model('paciente', pacienteSchema);

export default Paciente;