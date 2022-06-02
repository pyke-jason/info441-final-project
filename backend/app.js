import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import sessions from 'express-session'
import logger from 'morgan';

import indexRouter from './routes/index.js';
import authRouter from './routes/authentication.js';
import apiRouter from './routes/api/v1/apiv1.js';

import { fileURLToPath } from 'url';
import { dirname } from 'path';
import models from './models.js'
import 'dotenv/config'

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// Setup sessions
const oneDay = 1000 * 60 * 60 * 24;
app.use(sessions({
    secret: process.env.CLIENT_SECRET,
    saveUninitialized: true,
    cookie: {maxAge: oneDay},
    resave: false
}))

app.use(express.static(path.join(__dirname, '../frontend/build')));

app.use('/', indexRouter);
app.use('/', authRouter);
app.use((req, res, next) => {
    req.models = models
    next();
})
app.use('/api/v1', apiRouter);
app.get('*', (req,res) =>{
    res.sendFile(path.resolve(__dirname, '../frontend/build', 'index.html'))
})
export default app;
