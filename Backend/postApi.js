const { MongoClient } = require('mongodb')
const mongoConnection = require('./dbExport')
const express = require('express')
const cors = require('cors')
const app = express()
app.use(express.json())
app.use(cors())
app.post('/', async (req, res) => {

    const getData = await mongoConnection()
    const Result = await getData.insertOne(req.body);
    // console.log(req);

    // console.log(Result);
    // res.send(req.body)
    // console.log(req.body);

})
// app.post('/table', async (req, res) => {

//     const getData = await mongoConnection()
//     const Result = await getData.insertOne(req.body);
//     // console.log(req);

//     // console.log(Result);
//     // res.send(req.body)
//     // console.log(req.body);

// })

app.listen(4400, () => {
    console.log('its Sucessfull');
})