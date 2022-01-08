const express = require('express');
const app = express();
const mysql = require('mysql');

//middleware
app.use(express.urlencoded({extended: false}));

//Create a connection to our database
let conn = mysql.createConnection({
    host: 'localhost',
    user: 'sabrina',
    password: '145!1002MaP$',
    database: 'microhard',
});

//Test our database connection
conn.connect(function(err){
    if(err){
        console.log(err);
    }else{
        console.log('Database is connected!');
    }
});


app.get('/', function(req, res){
    let sql = 'SELECT * FROM students';
    conn.query(sql, function(err, result){
        if(err){
            res.send(err);
        }
        else{
            res.send(result);
        }
    });
});

app.post('/', function(req, res){
    let sql = `INSERT INTO students (first_name, last_name, age, gender, gpa, department_id) VALUES ('${req.body.first_name}', '${req.body.last_name}', '${req.body.age}', '${req.body.gender}', '${req.body.gpa}', '${req.body.department_id}')`;
    
    conn.query(sql, function(err, result){
        if(err){
        res.send(err);
        }
        else{
        res.redirect('/');
        }
    });
});

//Get by gender
app.get('/gender', function(req, res){
    let sql = `SELECT * FROM students where gender = '${req.query.gender}'`
    conn.query(sql, function(err,result){
        if(err){
            console.log(err);
        }else{
            res.send(result);
        }
    })
});

//Get by department
app.get('/department', function(req, res){
    let sql = `SELECT * FROM students where department = '${req.query.department_id}'`
    conn.query(sql, function(err,result){
        if(err){
            console.log(err);
        }else{
            res.send(result.pop());
        }
    })
});

//Get by ID
app.get('/id', function(req, res){
    let sql = `SELECT * FROM students where id = '${req.query.id}'`
    conn.query(sql, function(err,result){
        if(err){
            console.log(err);
        }else{
            res.send(result.pop());
        }
    })
});


app.listen(3000, function(){
    console.log('Server running on port 3000...')
});