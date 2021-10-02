import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import bodyParser from 'body-parser';
import cors from 'cors';

import indexRouter from './routes/index';
import usersRouter from './routes/users';
import calcRouter from './routes/calcRouter';

let app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../public')));
app.use(cors())

app.use(bodyParser.json());
app.use('/api', calcRouter);
app.use('/', indexRouter);
app.use('/users', usersRouter);

export default app;

