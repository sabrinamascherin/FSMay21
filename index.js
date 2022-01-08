const express = require('express');
const app = express();

app.get('/', function(req, res){
    res.send('Hello World');
});

//environment variable
app.listen(process.env.PORT || 3000, ()=>{
    console.log('Server running on port 3000...');
});