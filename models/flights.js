const mongoose = require("mongoose") 
const flightSchema = mongoose.Schema({ 
    flightType: String, 
    price: Number, 
    capacity: String 
}) 
 
module.exports = mongoose.model("Flights", 
flightSchema)