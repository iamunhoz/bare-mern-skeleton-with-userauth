import path from 'path'
import express from 'express'
import { MongoClient } from 'mongodb'
import template from './../template.js'
import devBundle from './devBundle.js'
import mongoCredentials from './../.mongoCredentials.js'

const app = express()
devBundle.compile(app)

const CURRENT_WORKING_DIR = process.cwd()
app.use('/dist', express.static(path.join(CURRENT_WORKING_DIR, 'dist')))
app.get('/', (req, res) => { 
    console.log(req)
    res.status(200).send(template()) 
})

let port = 3001
app.listen(port, function onStart(err) {
    if (err) {
        console.log(err)
    }
    console.info('Server started on port %s', port)
})    
const url = "mongodb+srv://"+mongoCredentials+"?retryWrites=true&w=majority"
MongoClient.connect(url, (err, db) => {
    console.log("Connected to mongo atlas server")
    db.close()
})

