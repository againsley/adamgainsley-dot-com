const express = require('express')  
const app = express()  
const port = 3000

app.use(express.static(__dirname + '/assets'));
app.use(express.static(__dirname + '/bower_components'));


// set the view engine to ejs
app.set('view engine', 'ejs');
app.set('views',__dirname + '/pages');


// home 
app.get('/', function(req, res) {
    res.render('index/index');
});

// blog 
app.get('/blog', function(req, res) {
    res.render('blog/blog');
});

// portfolios
app.get('/portfolios', function(req, res) {
    res.render('portfolios/portfolios');
});

// resume
app.get('/resume', function(req, res) {
    res.render('resume/resume');
});

// about
app.get('/about', function(req, res) {
    res.render('about/about');
});

// contact
app.get('/contact', function(req, res) {
    res.render('contact/contact');
});


app.listen(port, (err) => {  
  if (err) {
    return console.log('something bad happened', err)
  }

  console.log(`server is listening on ${port}`)
})
