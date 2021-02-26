import express from 'express';
import cors from 'cors'

import dotenv from 'dotenv'
dotenv.config()

const app = express();
const port = process.env.PORT || 5500;

app.use(cors());
app.use(express.json());

//setup routers
import {router as binaryTreeRouter} from './routes/binaryTreeRoute.js'


app.use('/binarytree', binaryTreeRouter);

app.listen(port, () =>{
    console.log('Server listening on port ' + port);
});