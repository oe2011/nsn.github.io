const express = require('express');

const app = express();
app.use(express.static('views'));


app.get('/', (req, res) => {
  res.render('index.ejs');
});

app.get('/works',(req,res)=>{
  res.render('works.ejs');
})

app.listen(3000);