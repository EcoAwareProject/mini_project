const mongoose = require("mongoose");

//connecting DB
mongoose.connect("mongodb+srv://suhailkhan:suhailkhan123@cluster0.sbtqv0i.mongodb.net/?retryWrites=true&w=majority")

//schema creation
const Schema = mongoose.Schema;
var invasiveSchema = new Schema({

   prediction: String,
   plantName: String,
   plantDesc: String
})
//model creation
var invasive = mongoose.model("invasive",invasiveSchema);
//exporting
module.exports = invasive;