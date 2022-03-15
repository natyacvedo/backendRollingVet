import mongoose, {Schema} from 'mongoose';

const comentarioSchema = new Schema({
        texto: {
            type: String,
            required:true
        },
        nombreCom:{
            type: String,
            required:true
        } 
});

const Comentario = mongoose.model('comentario', comentarioSchema);

export default Comentario;