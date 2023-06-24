const mongoose = require('mongoose');

module.exports = function(){
    mongoose.connect('mongodb://127.0.0.1:27017/products').then(function(res){
        console.log('Connected')
    }).catch(function(err){
        console.log(JSON.stringify(err))
    })
}
