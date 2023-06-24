const Product = require('../model/Product');

module.exports.saveData = async function(req, res){
    const product = await Product.create(req.body);
    if(!product){
        console.log('URL: '+req.url);
        return res.redirect('/product/save');
    }
    res.redirect('/product');
}
module.exports.showProducts = async function(req, res){
    const products = await Product.find();
    res.render('product', {products});
}

module.exports.productByID = async function(req, res){
    const product = await Product.findById(req.params.id);
    res.render("product-details", {product});
}

module.exports.deleteData = async function(req, res){
    const id = req.params.id;
    console.log('Sucessfully deleted');
    await Product.deleteOne({_id:id});
    res.redirect('/product');
}

module.exports.updateData = async function(req, res){
    const id = req.params.id;
    const product = await Product.findById(req.params.id);
    console.log(product);
    // res.send('Data is being updated with id : '+id);
    res.render('addProduct', {product});
}

module.exports.updateProduct = async function(req, res){
    const id = req.params.id;
    const newProduct = await Product.updateOne({_id:id}, {$set:{name:req.body.name, qty:req.body.qty, price:req.body.price, description:req.body.description}});
    console.log('Product Updated');
    console.log(newProduct);
    res.redirect('/product');


}
