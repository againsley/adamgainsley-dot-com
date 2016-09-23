const express = require('express')  
const app = express()  
const port = 3000

app.use(express.static(__dirname + '/assets'));
app.use(express.static(__dirname + '/bower_components'));


// set the view engine to ejs
app.set('view engine', 'ejs');
app.set('views',__dirname + '/pages');


// index page 
app.get('/', function(req, res) {
    res.render('index/index');
});

app.listen(port, (err) => {  
  if (err) {
    return console.log('something bad happened', err)
  }

  console.log(`server is listening on ${port}`)
})