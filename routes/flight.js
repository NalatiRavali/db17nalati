var express = require('express');
const flight_controlers= require('../controllers/flights'); 
var router = express.Router();

/* GET home page. */
router.get('/', flight_controlers.flight_list);

router.get('/detail', flight_controlers.flight_view_one_Page); 

router.get('/create', flight_controlers.flight_create_Page); 

router.get('/update',flight_controlers.flight_update_Page);

router.get('/delete', flight_controlers.flight_delete_Page);

module.exports = router;