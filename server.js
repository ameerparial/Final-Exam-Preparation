const express = require('express');
const path = require('path');
const validateProductMiddleware = require('./middlewares/validateProductMiddleware');
const connection = require('./Controllers/connection');
const {saveData, showProducts, productByID, deleteData, updateData, updateProduct} = require('./Controllers/crud');

const app = express();
app.set('view engine', 'ejs');
app.use(express.static(__dirname));
app.use(express.urlencoded({extended:true}));// app.use(bodyParser.urlencoded({extended:true}));

app.get("/home", (req, res)=>{
    // res.sendFile(path.join(__dirname, "files", "home.ejs"));
    res.render("home");
})

app.get("/about", (req, res)=>{
    // res.sendFile(path.join(__dirname, "files", "about.ejs"));
    res.render("about");
})

app.get("/product", showProducts);

app.get('/moveto/:id', (req, res)=>{
    console.log(req.body);
    res.render('addproduct');
});

app.get("/product/save", (req, res)=>{
    // res.sendFile(path.join(__dirname, "files", "addProduct.ejs"));
    const product={};
    res.render("addProduct", {product});
})
app.get("/product/:id", productByID);

app.post("/product/save", validateProductMiddleware, saveData)
app.post("/product/update/:id", validateProductMiddleware, updateProduct)


app.get("/product/delete/:id", deleteData);
app.get("/product/update/:id", updateData);



app.get("*", (req, res)=>{
    res.render("not-found");
})

const server = app.listen(5000, function(){
    connection();
    console.log('Server is listerning at port '+server.address().port);

});




