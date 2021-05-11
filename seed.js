const mongoose = require("mongoose");
const chalk = require('chalk')
const Data = require('./model/dataModel');


// Creating DB
mongoose.connect('mongodb://localhost:27017/crud-app',{useCreateIndex:true,useNewUrlParser: true, useUnifiedTopology: true})
.then(()=>{
  console.log(chalk.yellow('CONNECTED CORRECTLY'));
})
.catch(err => {
  console.log('error occur');
  console.log(err);
});

// const data = new Data({
//   name: 'Destiny Erhabor',
//   email: 'destinyerhabor6@gmail.com',
//   country: 'nigeria'
// });
// data.save()
//   .then(data => console.log(data))
//   .catch(err => console.log(err))

// OR USING InsertMany

const seedData = [
  {
    name: "Destiny Erhabor",
    email: "destinyerhabor6@gmail.com",
    country: "nigeria",
  },
  {
    name: "Caesarsage",
    email: "destinyerhabor@gmail.com",
    country: "india",
  },
  {
    name: "Don Caesar",
    email: "destinyerhabor6@gmail.com",
    country: "canada",
  },
];

const dataSeeds = async () => {
  try {
    await Data.deleteMany({});
    const createNew = await Data.insertMany(seedData);
    console.log(createNew);
  } catch (error) {
    console.log(error);
  }
};


dataSeeds();
