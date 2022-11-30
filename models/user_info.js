const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
    userName: {
        type: String,
        require: true,
    },
    
    
    email:{
        type: String,
        require: true,
    },
    
});

const Data = mongoose.model("Data",userSchema);
module.exports = Data;