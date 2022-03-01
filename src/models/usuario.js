import mongoose, {Schema} from 'mongoose';

const usuarioSchema = new Schema({
    userName:{
        type: String,
        required:true,
        unique:true
    },
    pass:{
        type: String,
        required:true
    }
});

const Usuario = mongoose.model('usuario', usuarioSchema);

export default Usuario;
