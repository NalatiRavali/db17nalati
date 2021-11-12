const mongoose = require("mongoose") 
const funzoneSchema = mongoose.Schema({ 
 funzone_type: String, 
 size: String, 
 cost: Number 
}) 
 
module.exports = mongoose.model("funzone", 
funzoneSchema) 