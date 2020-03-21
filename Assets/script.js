$(document).ready(function(){
//Set up my Key:
var APIKey = "beb12de68de22cd70503838ed01ed80c"
//build URL:
//Main City forecast (1day)
var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=orlando&appid=" + APIKey;
//5 day forecast
var queryURL2 = "https://api.openweathermap.org/data/2.5/forecast?q=orlando&appid=" + APIKey;
//Run Ajax:
$.ajax({
    url: queryURL,
    method: "GET"
  })
    //store data in response
    .then(function(response) {
// Log the queryURL
      console.log(queryURL);
// Log the resulting object
      console.log(response);

//grab my content to place in HTML
    
    
    });

//create a event listener for the button
//create a function for the handler

$.ajax({
    url: queryURL2,
    method: "GET"
  })
    //store data in response
    .then(function(response) {
// Log the queryURL
      console.log(queryURL2);
// Log the resulting object
      console.log(response);

//grab my content to place in HTML
    
    
    });









})