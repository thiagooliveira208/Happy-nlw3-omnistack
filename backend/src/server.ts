import express from 'express';
import path from 'path';
import cors from 'cors';
import 'express-async-errors';

import './database/connection';

import routes from './routes';

import errorHandler from './errors/handler';

const app = express();

app.use(cors({}));
app.use(express.json());
app.use(routes);
app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')));
app.use(errorHandler);

//Rota = conjunto
//Recurso = usuário

//Metodos HTTP = GET, POST, PUT, DELETE
//Parametros

//GET = Buscar informação
//POST = Criando uma nova informação
//PUT = Editando informação
//DELETE = Deletar informação

//Query: http://localhost:3333/users?search=nome
//Route Params: http://localhost:3333/users/1 (Identificaar um recurso)
//Body: http://localhost:3333/users/1 (Identificaar um recurso)

//console.log(request.query);
//console.log(request.params);

app.listen(3333);