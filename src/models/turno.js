import mongoose, {Schema} from "mongoose";

const turnoSchema = new Schema({
    profesional:{
        type: String,
        required: true
    },
    startDate:{
        type: String,
        required: true
    },
    nombreMascota:{
        type: String,
        required: true,
        maxlength: 20
    },
    motivoConsulta:{
        type: String,
        required: true,
        maxlength: 150
    }
});