const express = require('express');
const app = express();
const config = require('./config');
const cors = require('cors');
const User = require('./models/user');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const Budget = require('./models/budget');
const Transaction = require('./models/transaction');
const Goal = require('./models/goal');


app.use(cors());
app.use(express.json());

//database connection
config.authenticate().then(() => {
    console.log('Database connected');
}).catch((err) => {
    console.log(err);
});

//user registration
app.post('/register', function(req, res){
    let plainPassword = req.body.password;

    bcrypt.hash(plainPassword, saltRounds, function(err, hash){
        let user_data = {
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            email: req.body.email,
            password: hash
        };

        User.create(user_data).then((result)=>{
            res.status(200).send(result);
        }).catch((err)=>{
            res.status(500).send(err);
        });
    });
});

//user login
app.post('/login', function(req, res){

    let email = req.body.email;
    let password = req.body.password;
    let user_data = {
        where: {email}
    }

    //Find a user that corresponds to the email
    User.findOne(user_data).then((result) => {
        if (result){
            console.log(result);
            bcrypt.compare(password, result.password, function(err, output){
                console.log(output);
                if(output){
                    res.status(200).send(result);
                }else{
                    res.status(400).send('Incorrect password.');
                }
            });
        }
        else{
            res.status(404).send('User does not exist.');
        }
    }).catch((err) => {
        res.status(500).send(err);
    });
})

//GET budget
app.get('/', function(req,res){
    Budget.findAll().then((result) => {
        res.status(200).send(result);
    }).catch((err) => {
        res.status(500).send(err);
    });
});

//GET goal
app.get('/', function(req,res){
    Goal.findAll().then((result) => {
        res.status(200).send(result);
    }).catch((err) => {
        res.status(500).send(err);
    });
});

//GET transactions
app.get('/', function(req,res){
    Transaction.findAll().then((result) => {
        res.status(200).send(result);
    }).catch((err) => {
        res.status(500).send(err);
    });
});

app.listen(process.env.PORT || 1000, () => {
    console.log('Server running on port 1000...');
});