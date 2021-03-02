import express from 'express';
import cors from 'cors'

import dotenv from 'dotenv'
dotenv.config()

const app = express();
const port = process.env.PORT || 5500;

app.use(cors());
app.use(express.json());
app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});

//setup routers
import {router as binaryTreeRouter} from './routes/binaryTreeRoute.js'


app.use('/binarytree', binaryTreeRouter);

app.listen(port, () =>{
    console.log('Server listening on port ' + port);
});