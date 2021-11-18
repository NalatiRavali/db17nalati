var express = require('express'); 
var router = express.Router(); 

// Require controller modules.
var api_controller = require('../controllers/api'); 
var flight_controller = require('../controllers/flights'); 
 
/// API ROUTE /// 
// GET resources base. 
router.get('/', api_controller.api); 
 
/// COSTUME ROUTES /// 
 
// POST request for creating a Costume.  
router.post('/flights', flight_controller.flight_create_post); 
 
// DELETE request to delete Costume. 
router.delete('/flights/:id',flight_controller.flight_delete); 
 
// PUT request to update Costume. 
router.put('/flights/:id',
flight_controller.flight_update_put); 
 
// GET request for one Costume. 
router.get('/flights/:id', flight_controller.flight_detail);
 
router.get('/flights/:id', flight_controller.flight_view_one_Page); 
// GET request for list of all Costume items.
router.get('/flights', flight_controller.flight_view_all_Page); 



module.exports = router; 