//to run the backend , we need a server. so, we use express to create the server
const express = require('express');
const app =  express();
const cors = require('cors');
const controller = require('./controller.js')

app.use(cors());

app.use(
    express.urlencoded({
        extended: true,
    })
);

app.use(express.json());

app.get('/users', (req,res) => {
    controller.getUsers((req,res,next) =>{
        res.send();
    });  
});

app.get('/user', (req,res) => {
    const id = req.query.id
    controller.getUserById((id,req,res,next) => {
        res.send();
    });
});

app.post('/createuser', (req,res) => {
    controller.addUser(req.body, (callback) => {
        res.send();
    });
});

app.put('/updateuser',(req,res) => {
    controller.updateUser(req.body, (callback) => {
        res.send(callback);
    })
})
app.delete('/deleteuser',(req,res) => {
    controller.deleteUser(req.body, (callback) => {
        res.send(callback);
    })
})




module.exports = app;