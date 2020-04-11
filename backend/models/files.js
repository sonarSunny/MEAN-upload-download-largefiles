const mongoose 	= require('mongoose')
const Schema 	= mongoose.Schema;

const fileSchema =new Schema({
    fileName:{
        type:String
    }
})

module.exports =mongoose.model('FileDetail',fileSchema);