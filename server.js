const express = require('express');
const app =  express();
const cors = require('cors');

// const app = require('./app');
const port = 3001;
const host = '127.0.0.1';
const mongoose = require('mongoose')
const router = require('./router');

app.use(cors());
app.use(express.json());
const uri = 'mongodb+srv://hansikapiumali97new:hansikapiumali97new@cluster0.b4rlc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
const connect = async () => {
    try{
     await mongoose.connect(uri)
     console.log("Connected to Mongo db")
    }
    catch(error) {
     console.log("mongoDB Error" , error)
    }
};
connect();

const server = app.listen(port,host,()=>{
    console.log(`Node server is listening to ${server.address().port} `)
});
app.use('/api', router);