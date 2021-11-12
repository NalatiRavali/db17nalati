var express = require('express'); 
var router = express.Router(); 
 
// Require controller modules. 
var funzone_controller = require('../controllers/funzone'); 

router.get('/', funzone_controller.funzone_view_all_Page)

exports.funzone_create_post = async function(req, res) { 
    console.log(req.body) 
    let document = new funzone(); 
    // We are looking for a body, since POST does not have query parameters. 
    // Even though bodies can be in many different formats, we will be picky 
    // and require that it be a json object 
    // {"funzone_type":"goat", "cost":12, "size":"large"} 
    document.funzone_type = req.body.funzone_type; 
    document.cost = req.body.cost; 
    document.size = req.body.size; 
    try{ 
        let result = await document.save(); 
        res.send(result); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 

 
module.exports = router; 

