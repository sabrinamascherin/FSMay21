//Run server
var express = require('express');
var app = express();

var server = app.listen(3000, function(){
    console.log("Server running on port 3000...");
})

//Create array
const students = [
{id: 101, name: 'Donald Duck', grade: 3},
{id: 102, name: 'Mickey Duck', grade: 4},
{id: 188, name: 'Goofy Duck', grade: 1},
{id: 120, name: 'John Duck', grade: 4},
]

//Get method
app.get('/students', (req, res) => {
    res.send(students);
});

//Get specific student by ID
app.get('/students/:id', (req, res) => {
    const student = students.find((element)=>{
        if (element.id === parseInt(req.params.id))
        return true});
        if (student) {return res.status(200).send(student);}
        return res.status(404).send('Wrong ID, No Student Found');
});

//Post student
app.post('/sudents/add_student', (req, res) => {
    const student = {
        id: req.body.id,
        name: req.body.name,
        grade: req.body.grade
    };
    students.push(student);
    res.status(200).send(student);
});

