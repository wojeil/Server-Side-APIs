$(document).getready(function(){
//Set up my Key:
var APIKey = "647fbf122ebdb908d9e9758d0ce8bf5e"
//build URL:
var queryURL = "https://api.openweathermap.org/data/2.5/weather?" +
"q=Bujumbura,Burundi&appid=" + APIKey;
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
    
    
    
    
    
    
    
    
    
    
    });












})