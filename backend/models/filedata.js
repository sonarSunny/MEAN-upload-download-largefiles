const mongoose 	= require('mongoose')
const Schema 	= mongoose.Schema;

const fileDataSchema =new Schema({
   ts:{
       type:Number
   },
   val:{
       type:Number
   }
})

module.exports =mongoose.model('FileData',fileDataSchema);