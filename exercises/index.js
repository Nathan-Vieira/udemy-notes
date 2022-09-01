const express = require('express')
const app = express();
const Port = 3000;

var todoRotues = require('./routes/todos');
app.get('/', function (req, res) {
  res.send('Hello from root route');
})

app.use('/api/todos', todoRotues);

app.listen(Port, function(){
    console.log("APP runnning on " + Port);
});