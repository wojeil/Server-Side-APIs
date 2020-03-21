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

        
        //Main City forecast (1day)
        var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIKey;
        // Main City forecast (5 days)
        var queryURL2 = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=" + APIKey;
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            $("#main").empty();
                // Log the queryURL
                console.log(queryURL);
                // Log the resulting object
                console.log(response);
          //target my div where I want the city chosen to post      
             var Main= $("#main");
             city = response.name;
             //display city and date in H2
             var h1 = $("<h1>").text(city + " ("+ moment().format('LL') + ")");
            //append on the page
            Main.append(h1);
           

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
//The method below will clear the the space inside the empty div to make sure it prepends the text once.
        $("#emptyDiv").empty();
//loop to go through all the local storage 
        for (var i = 0; i < localStorage.length; i++) {
//getting item from local storage 
            var emptyDiv = localStorage.getItem(localStorage.key(i));
//placing item in a text form 
            var fullDiv = $("<p>").text(emptyDiv);
//grabbing that text and placing inside the empty div
            $("#emptyDiv").prepend(fullDiv);

        }

    }


//Access the API 

//apeend the data to the page 






})