import express from "express";
import morgan from "morgan";
import cors from "cors";

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

app.get('/turnos',(req, res)=>{
    res.send('lista de turnos');
})