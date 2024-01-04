
const express = require('express');
require('./config');
const Product = require('./product');
const multer = require('multer');
const app = express();

app.use(express.json());

const upload = multer({
    storage: multer.diskStorage({
        destination : function name(req, file, cb) {
            cb(null, "fileUploads")
        },
        filename : function name(req, file, cb) {
            cb(null, file.fieldname + "-"+Date.now()+ ".jpg")
        }
    })
}).single("user_file");

// app.get('/search/:key', async (request, response)=>{
//     const data = await Product.find({
//         "$or":[
//             {"name":{$regex:request.params.key}},
//             {"brand":{$regex:request.params.key}}
//         ]
//     });
//     console.log(request.params.key);
//     response.send(data);
// });
app.post('/upload', upload, async (request, response)=>{
    // const data = new Product(request.body);
    // const result = await data.save();
    response.send("file Uploaded successfully");
});
// app.delete('/delete/:_id', async (request, response)=>{
//     const data = new Product(request.params);
//     const result= await data.deleteOne(request.params);
//     response.send(result);
// });
// app.put('/update/:_id', async (request, response)=>{
//     const data = await Product.updateOne(
//         request.params,{$set:request.body}
//     );
//     response.send(data);
// });
app.listen(5000);
