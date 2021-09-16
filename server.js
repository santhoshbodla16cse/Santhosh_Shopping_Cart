const express = require('express');
const mongoose = require('mongoose');
const shortid = require('shortid');
const bodyParser = require('body-parser');

const app = express();
app.use(express.json())
app.use(express.urlencoded({extended:false}))
mongoose.connect("mongodb://localhost:27017/react-shopping-cart-db",{
    // useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log("Connection established");
}).catch((err)=>{
    console.log(err);
})

const Product = mongoose.model("products",
new mongoose.Schema({
    _id :{type : String, default: shortid.generate},
    title: String,
    description: String,
    image: String,
    price: Number,
    availableSizes: [String],

})
);

app.get("/api/products", async(req, res)=>{
    const products = await Product.find({});
    res.send(products);
})
app.get("/api/products/description/:id",async(req,res)=>{
    const result = await Product.findById(req.params.id);
    res.send("its working");
    // res.render("desc.html");
})
app.post("/api/products", async(req, res)=>{
    const newProduct = new Product(req.body);
    const saveProduct = await newProduct.save();
    res.send(saveProduct);
})

app.delete("/api/products/:id", async(req,res)=>{
    const deletedProduct = await Product.findByIdAndDelete(req.params.id);
    res.send(deletedProduct);
})

const port = process.env.PORT || 5000;
app.listen(port, ()=>console.log("server started at port 5000"));

