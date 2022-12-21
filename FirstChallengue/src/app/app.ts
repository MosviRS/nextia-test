import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cors from "cors";
import * as dotenv from 'dotenv';
import path from "path";
const app = express();
//Set enviroment variables
const NODE_ENV= process.env.NODE_ENV || 'development';
dotenv.config({
  path: `.env.${NODE_ENV}`
});

//Settings
app.set('port',process.env.PORT || 3000);

//Middleware
app.use(express.json());
app.use(morgan('dev'));
app.use(helmet());
app.use(cors());

//Routes
/* app.use('/api/cursos',require('./routes/curso.routes'));
app.use('/api/auth',require('./routes/auth.routes')); */

//Starting Server
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname,'../index.html'))
}); 


app.listen(app.get('port'), () => {
  console.log(`Example app listening at http://localhost:${app.get('port')}`)
});