
const mongoose = require('mongoose'); //install and import "mongoose" package

const productSchema = new mongoose.Schema({      // Schema created
    name : String,
    brand: String,
    price: Number,
});

const productModel = new mongoose.model("products", productSchema); // Model created
 
const main = async ()=>{
    await mongoose.connect("mongodb://localhost:27017/Project_E-Commerce"); // connect mongoose with mongodb database
 
 

const saveInDB= async ()=>{
    let data = new productModel({
        name:"Sony Experia",
        brand:"Micromax",
        price:"25000"
    });
    let result = await data.save();
    console.log(result);
}
// saveInDB()
const updateInDB = async()=>{
    let data = await productModel.updateOne(
        {name:"Sony Experia"},{$set:{price:"150200", name:"Nokia Lumia"}}
    )
    console.log(data);
}

const deleteInDB = async()=>{
    let data = await productModel.deleteOne(
        {name:"Nokia Lumia"}
    )
    console.log(data);
}
// deleteInDB()
const findInDB = async()=>{
    let data = await productModel.find({name:"Q-50"}
    )
    console.log(data);
}
findInDB();

}
main();