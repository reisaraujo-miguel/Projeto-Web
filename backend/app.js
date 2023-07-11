import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import Product from './models/product-model.js'
import User from './models/user-model.js'
import products from './routes/product-route.js'
import users from './routes/user-route.js'

import { fileURLToPath } from 'url';
import {dirname} from 'path'
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Creating an instance of express to setup the server

const app = express();
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))


mongoose.connect('')

app.use((req, res, next) => {
    const currDate = new Date();
    console.log(currDate)
    console.log(`Request Method: ${req.method}`);
    console.log(`Request URL: ${req.url}`);
    next();
});

app.use('/products', products)
app.use('/users', users)
app.get('/', (req, res) => {
    console.log("default")
})

app.listen(3000, () => {
    console.log('Server is listening on port 3000');
});

