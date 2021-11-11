var express = require('express'); 
var router = express.Router(); 
 
// Require controller modules. 
var api_controller = require('../controllers/api'); 
var costume_controller = require('../controllers/funzone'); 
 
/// API ROUTE /// 
 
// GET resources base. 
router.get('/', function(req, res) { 
    res.write('['); 
    res.write('{"resource":"costumes", '); 
    res.write('  "verbs":["GET","PUT", "DELETE"] '); 
    res.write('}'); 
    res.write(']') 
    res.send(); 
});

router.get('/costumes', costume_controller.costume_list);

 
/// COSTUME ROUTES /// 
 
// POST request for creating a Costume.  
router.post('/costumes', costume_controller.costume_create_post); 
 
// DELETE request to delete Costume. 
router.delete('/costumes/:id', costume_controller.costume_delete); 
 
// PUT request to update Costume. 
router.put('/costumes/:id', 
costume_controller.costume_update_put); 
 
// GET request for one Costume. 
router.get('/costumes/:id', costume_controller.costume_detail); 
 
// GET request for list of all Costume items. 
 
module.exports = router; 
