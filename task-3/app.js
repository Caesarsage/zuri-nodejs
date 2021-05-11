const bodyParser = require('body-parser');
const express = require('express'),
      chalk = require('chalk'),
      morgan = require('morgan'),
      Data = require('./model/dataModel'),
      router = require('./routes/dataRoute'),
      mongoose = require('mongoose');

const app = express();

// Creating DB
mongoose.connect('mongodb://localhost:27017/crud-app',{useCreateIndex:true,useNewUrlParser: true, useUnifiedTopology: true})
.then(()=>{
  console.log(chalk.yellow('CONNECTED CORRECTLY'));
})
.catch(err => {
  console.log('error occur');
  console.log(err);
});

// Middlewares
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(morgan('tiny'));

// routes
app.use('/', router)

const PORT = process.env.PORT || 4000;

app.listen(PORT, ()=>{
  console.log('listening at port', chalk.green(PORT));
})
