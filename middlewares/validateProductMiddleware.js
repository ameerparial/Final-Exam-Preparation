module.exports= function verificationMiddleware(req, res, next){
    const product = req.body;
    for(let key in product){
        // console.log(key+" : "+product[key]);
        if(product[key]===''){
            return res.redirect(req.url);
        }
    }
    next();
}
