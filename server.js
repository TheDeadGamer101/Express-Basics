const express = require('express');
const path = require('path');
const app = express();

// public directory
app.use(express.static('public'));

// viewing
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs');

app.get('/questions', (req, res) => {

  let questions = [
    {title: "What is Node.js?", user: "Kadi", votes: "10"}, 
    {title: "What is Express.js?", user: "Mike", votes: "8"}, 
  ]; 
  res.render('index', {questions:questions});
});

app.listen(3000, ()=> {
  console.log('Server started on http://localhost:8080');
});