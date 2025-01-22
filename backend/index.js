const express = require('express');
require('./db/config');
const User = require('./db/User');
const cors = require('cors');
const Product = require('./db/products');
const jwt = require('jsonwebtoken');
const jwtKey = 'ecomm'
const app = express();

app.use(express.json());
app.use(cors());

app.post('/signup', async (req, res) => {
  let user = new User(req.body);
  let result = await user.save();
  result = result.toObject();
  delete result.password;
  jwt.sign({result}, jwtKey , {expiresIn:"2h"} , (err, token)=>{
    err?res.send("Something Went wrong"):
    res.send({result, auth: token})
  })
})

app.post('/login', async (req,res)=>{
  if(req.body.password && req.body.username){
    let result = await User.findOne(req.body).select('-password')
    if(result){
      jwt.sign({result}, jwtKey , {expiresIn:"2h"} , (err, token)=>{
        err?res.send("Something Went wrong"):
        res.send({result, auth: token})
      })
    }else{
      res.send({result: "No user found!!"})
    }
  }else{
    res.send({result: "Invalid input, Enter username & password"})
  }
})

app.post('/add-product',verifyToken, async (req,res) =>{
  let product = new Product(req.body);
  let result = await product.save();
  res.send(result)
})

app.get('/products',verifyToken, async (req,res)=>{
  let products = await Product.find()
  products.length>0 ? res.send(products): res.send("No Products Available")
})

// products by user id
app.get('/products/:id',verifyToken, async(req,res)=>{
  let userId = req.params.id
  let products = await Product.find({userId})
  console.log(userId, products)
  products.length>0 ? res.send(products): res.send("No Products Available")
})

app.delete('/product/:id',verifyToken, async (req,res)=>{
  const result = await Product.deleteOne({_id: req.params.id})
  res.send(result)
})

app.put('/update-product/:id',verifyToken, async (req,res)=>{
  const result = await Product.updateOne({_id: req.params.id}, req.body)
  res.send(result)
})

// get product by product id
app.get('/product/:id',verifyToken, async(req,res)=>{
  let product = await Product.findOne({_id: req.params.id})
  res.send(product)
})

// search
app.get('/search/:key', verifyToken, async (req,res)=>{
  let result = await Product.find({
    "$or" :[
      {pname: {$regex:req.params.key}},
      {category: {$regex:req.params.key}},
      {brand: {$regex:req.params.key}}
    ]
  });
  res.send(result)
})

function verifyToken(req, res, next){
  let token = req.headers['authorization'];
  if(token){
    token = token.split(" ")[1];
    console.log(token);
    jwt.verify(token, jwtKey, (err, valid)=>{
      err ? res.status(401).send({result: "Invalid Token"}) : next(); 
    })
  }else{
    res.status(403).send({result: "Unauthrized Access, no token found!"})
  }
}

app.listen(5000)