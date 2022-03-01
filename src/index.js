import express from "express";
import morgan from "morgan";
import cors from "cors";
import path from "path";
import router from "./routes/pacientes.routes";
import './database';
import routerUser from "./routes/usuarios.routes";


const app = express();
app.set('port', process.env.PORT || 4000);

app.listen( app.get('port'), () => {
    console.log('puerto '+ app.get('port'));
})

//midlewares
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

//archivo estatico
app.use(express.static(path.join(__dirname, "../public")));

// app.get('/turnos',(req, res)=>{
//     res.send('aparece lista de turnos');
// })
app.use('/apipacientes',router)


app.use('/apiuser',routerUser)