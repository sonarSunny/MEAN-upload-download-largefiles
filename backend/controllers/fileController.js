const fs =require('fs');
const filedata =require('../models/filedata');
const Promise = require('bluebird');
const { parseAsync } = require('json2csv');
module.exports.processFile =(req,res)=>{
    const fileData =req.files[0].buffer;
    fs.writeFile(`uploads/user.json`,fileData,(err)=>{
        if(err)
        {
            console.log(err);
            return res.json('file not saved ');
        }
        else
        {
            let data ='';
            const readerStream = fs.createReadStream('uploads/user.json',{encoding:'UTF8'});
            readerStream.on('data', function(chunk) {
                data += chunk;
             });
             
             readerStream.on('end',function() {
                 const arr =JSON.parse(data);
                 const chunk_array =chunkArray(arr,500)
                 Promise.map(chunk_array,(userdata)=>{
                    return processRecord(userdata)
                 },{concurrency:20}).then(()=>{
                  //  fs.unlinkSync('uploads/user.json')
                     return res.json('uploaded');
                 }).catch((err)=>{
                     console.log(err);
                 })
             });
             
             readerStream.on('error', function(err) {
                console.log(err.stack);
             });
        }
    })

}
module.exports.getFile =async(req,res)=>{
 const apidata =await filedata.find({},{_id:0,ts:1,val:1}).limit(500);
console.log(apidata.length)
 parseAsync(JSON.parse(JSON.stringify(apidata)))
  .then(csv =>{
    // console.log(csv)
    res.set('Content-Type', 'text/csv');
    res.setHeader('Content-Disposition', 'attachment; filename=data.csv');
    return res.send(csv);
  })
  .catch(err => {
    // console.error(err)
    return res.json(err)
  });
}

function processRecord (rec){
    // console.log(rec)
    return new Promise((resolve,reject)=>{
        filedata.insertMany(rec,(err,docs)=>{
            if(err){
                // console.log(err);
                reject(err)
            }
            if(docs){
                resolve(true)
            }
        })
    })
  }

function chunkArray(myArray, chunk_size){
    var results = [];
    
    while (myArray.length) {
        results.push(myArray.splice(0, chunk_size));
    }
    return results;
}