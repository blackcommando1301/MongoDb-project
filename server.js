import express from 'express'

 import { APP_PORT } from "../routes/index.js"
 
const app=express();
dbConnection()

import routes from './routes'
import dbConnection from './routes/models/conn';
app.use(express.json())
console.log('object')
app.use('/api',routes)
app.listen(5000,()=>console.log(`Listen on port ${APP_PORT}.`))