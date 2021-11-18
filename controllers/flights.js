var Flights = require("../models/flights");

// List of all Flight

exports.flight_list = async function (req, res) {
  try {
    theFlights = await Flights.find();
    res.send(theFlights);
  } catch (err) {
    res.status(500);
    res.send(`{"error": ${err}}`);
  }
};
/*
// for a specific Flight.
exports.flight_detail = function (req, res) {
  res.send("NOT IMPLEMENTED: Flight detail: " + req.params.id);
}; */

// Handle Flight create on POST.
exports.flight_create_post = function (req, res) {
  res.send("NOT IMPLEMENTED: Flight create POST");
};

/*
// Handle Flight delete form on DELETE.
exports.flight_delete = function (req, res) {
  res.send("NOT IMPLEMENTED: Flight delete DELETE " + req.params.id);
}; */

/*
// Handle Flight update form on PUT. 
exports.flight_update_put = function(req, res) { 
    res.send('NOT IMPLEMENTED: Flight update PUT' + req.params.id); 
}; */

exports.flight_view_all_Page = async function (req, res) {
  try {
      console.log('flight_view_all_Page')
    theFlights = await Flights.find();
    res.render("flight", {
      title: "Flight Search Results",
      results: theFlights,
    });
  } catch (err) {
    res.status(500);
    res.send(`{"error": ${err}}`);
  }
};

// Handle flight create on POST.
exports.flight_create_post = async function (req, res) {
  console.log(req.body);
  let document = new Flights();
  // We are looking for a body, since POST does not have query parameters.
  // Even though bodies can be in many different formats, we will be picky
  // and require that it be a json object
  // {"flight_type":"goat", "cost":12, "size":"large"}
  document.flightType = req.body.flightType;
  console.log(document.flightType);
  document.price = req.body.price;
  document.capacity = req.body.capacity;
  try {
    let result = await document.save();
    res.send(result);
  } catch (err) {
    res.status(500);
    res.send(`{"error": ${err}}`);
  }
};

// for a specific Flight.
exports.flight_detail = async function (req, res) {
  console.log("detail" + req.params.id);
  try {
    result = await Flights.findById(req.params.id);
    res.send(result);
  } catch (error) {
    res.status(500);
    res.send(`{"error": document for id ${req.params.id} not found`);
  }
};

exports.flight_update_put = async function (req, res) {
  console.log(`update on id ${req.params.id} with body 
    ${JSON.stringify(req.body)}`);
  try {
    let toUpdate = await Flights.findById(req.params.id);
    // Do updates of properties
    if (req.body.flightType) toUpdate.flightType = req.body.flightType;
    if (req.body.price) toUpdate.price = req.body.price;
    if (req.body.capacity) toUpdate.capacity = req.body.capacity;
    let result = await toUpdate.save();
    console.log("Sucess " + result);
    res.send(result);
  } catch (err) {
    res.status(500);
    res.send(`{"error": ${err}: Update for id ${req.params.id} 
failed`);
  }
};

exports.flight_delete = async function (req, res) {
  console.log("delete " + req.params.id);
  try {
    result = await Flights.findByIdAndDelete(req.params.id);
    console.log("Removed " + result);
    res.send(result);
  } catch (err) {
    res.status(500);
    res.send(`{"error": Error deleting ${err}}`);
  }
};

// Handle a show one view with id specified by query
exports.flight_view_one_Page = async function (req, res) {
  console.log("single view for id " + req.query.id);
  try {
      console.log('here');
    result = await Flights.findById(req.query.id);
    console.log(result)
    res.render("flightdetail", { title: "Flight Detail", toShow: result });
  } catch (err) {
    res.status(500);
    res.send(`{'error': '${err}'}`);
  }
};

 // Handle building the view for creating a flight. 
// No body, no in path parameter, no query. 
// Does not need to be async 
exports.flight_create_Page =  function(req, res) { 
    console.log("create view") 
    try{ 
        res.render('flightcreate', { title: 'Flight Create'}); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
};

// Handle building the view for updating a flight. 
// query provides the id 
exports.flight_update_Page =  async function(req, res) { 
    console.log("update view for item "+req.query.id) 
    try{ 
        let result = await Flights.findById(req.query.id) 
        console.log(result)
        res.render('flightupdate', { title: 'flight Update', toShow: result }); 
    }
    catch(err){
        res.status(500)
        res.send(`{'error': '${err}'}`); 
    } 
}; 

// Handle a delete one view with id from query 
exports.flight_delete_Page = async function(req, res) { 
    console.log("Delete view for id "  + req.query.id) 
    try{
        result = await Flights.findById(req.query.id) 
        res.render('flightdelete', { title: 'Flight Delete', toShow: 
result }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    }
};