const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const port = 3000;

                    // Database connection
mongoose.connect('',{useNewUrlParser:true,useUnifiedTopology:true});

                    //  Database Schema

let contactschema = new mongoose.Schema({
    name:String,
    email:String,
    phone:String,
    address:String,
    password:String,
    cpassword:String
});

            // mongoDB model Object
let Contact = mongoose.model('Contact', contactschema);


app.use('/static',express.static('static'));
app.use(express.urlencoded());
app.set('view engine','pug');
app.set('/views',path.join(__dirname,'views'));


app.get('/', (req,res)=>{
    res.render('home');
});

app.get('/register', (req,res)=>{
    res.render('registration');
});

app.post('/register', (req,res)=>{
    let mydata = new Contact(req.body);
    mydata.save().then(()=>{
        res.render('registration');
    }).catch(()=>{
        res.send('Data has not inserted successfully');
    });
});

app.listen(port, ()=>{
    console.log(`Server is running successfully at port ${port}`);
});