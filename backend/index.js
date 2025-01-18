const express = require('express');
require('./db/config');
const User = require('./db/User');
const cors = require('cors');
const Product = require('./db/products');
const app = express();

app.use(express.json());
app.use(cors());

app.post('/signup', async (req, res) => {
  let user = new User(req.body);
  let result = await user.save();
  result = result.toObject();
  delete result.password;
  res.send(result);
})

app.post('/login', async (req,res)=>{
  if(req.body.password && req.body.username){
    let user = await User.findOne(req.body).select('-password')
    if(user){
      res.send(user)
    }else{
      res.send({result: "No user found!!"})
    }
  }else{
    res.send({result: "Invalid input, Enter username & password"})
  }
})

app.post('/add-product', async (req,res) =>{
  let product = new Product(req.body);
  let result = await product.save();
  res.send(result)
})

app.listen(5000)