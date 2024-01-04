
const express = require('express');
require('./config');
const Product = require('./product');
const app = express();

app.use(express.json());

app.get('/', async (request, response)=>{
    const data = await Product.find();
    response.send(data);
});
app.post('/create', async (request, response)=>{
    const data = new Product(request.body);
    const result = await data.save();
    response.send(result);
});
app.delete('/delete/:_id', async (request, response)=>{
    const data = new Product(request.params);
    const result= await data.deleteOne(request.params);
    response.send(result);
});
app.put('/update/:_id', async (request, response)=>{
    const data = await Product.updateOne(
        request.params,{$set:request.body}
    );
    response.send(data);
});
app.listen(5000);
