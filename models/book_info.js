const mongoose = require('mongoose');


const userSchema1 = new mongoose.Schema({
    bookName: {
        type: String,
        require: true,
    },
    authorName:{
        type: String,
        require: true,
    },
    year_edition:{
        type: String,
        require: true,
    },
    sellerCity:{
        type: String,
        require: true,
    },
    subject:{
        type: String,
        require: true,
    },
    sellerName1:{
        type: String,
        require: true,
    },
    sellerEmail:{
        type: String,
        require: true,
    },
    sellerPhone:{
        type: String,
        require: true,
    },
    originalPrice:{
        type: String,
        require: true,
    },
    sellerPrice:{
        type: String,
        require: true,
    },
    sellerState:{
        type: String,
        require: true,
    },
    imgLink1:{
        type: String,
        require: true,
    },
    imgLink2:{
        type: String,
        require: true,
    },
});

const Data1 = mongoose.model("Data1",userSchema1);
module.exports = Data1;