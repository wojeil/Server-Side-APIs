$(document).ready(function () {
    //Set up my Key:
    var APIKey = "beb12de68de22cd70503838ed01ed80c"

    //create a event listener for the button
    $("#search").on("click", function (event) {

        //place this stop page from refreshing
        event.preventDefault();

        //grab text from input
        var city = $("#city").val();

        ////setting info in local storage
        localStorage.setItem(city, city);

        //build URL:
        //Main City forecast (1day)
        var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIKey;
        var queryURL2 = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=" + APIKey;
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
                // Log the queryURL
                console.log(queryURL);
                // Log the resulting object
                console.log(response);

            });
         $.ajax({
            url: queryURL2,
            method: "GET"
            }).then(function (response) {
                // Log the queryURL
                console.log(queryURL2);
                // Log the resulting object
                console.log(response);
        
            });    
        //place the saved items in the page
        renderCities();


    })
// make a function that will place the data saved in local storage 
    function renderCities() {
//below 
        $("#emptyDiv").empty();
        for (var i = 0; i < localStorage.length; i++) {
            var emptyDiv = localStorage.getItem(localStorage.key(i));
            var fullDiv = $("<p>").text(emptyDiv);

            $("#emptyDiv").prepend(fullDiv);

        }

    }


//Access the API 

//apeend the data to the page 






})