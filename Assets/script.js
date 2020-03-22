
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

        //setting side buttons to work
        $(document).on("click",".sH",function(){
            //alert("yaaaay");
            
            return ajax();
        });

        
        //Main City forecast (1day)
        var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&appid=" + APIKey;
        // Main City forecast (5 days)
        var queryURL2 = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&units=imperial&appid=" + APIKey;
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
            //placing weather icon
            var icon = response.weather[0].icon;
            var imgTag= $("<img>").attr("src", "http://openweathermap.org/img/wn/"+icon+"@2x.png")
            Main.append(imgTag)
            //placing the temp on the page
            var temp = response.main.temp
            var p1 = $("<p>").text("Temperature: " + temp +"°F"); 
            Main.append(p1);
            //placing humidity of the page
            var humidity = response.main.humidity
            var p2 = $("<p>").text("Humidity: " + humidity +"%");
            Main.append(p2);
            //placing wind speed
            var wind = response.wind.speed
            var p3 = $("<p>").text("Wind Speed: " + wind + "mph");
            Main.append(p3);
            //placing UV index 
            var uV = response.weather.coord
            console.log(uV)
            //p4 for UV

           

            });
         $.ajax({
            url: queryURL2,
            method: "GET"
            }).then(function (response) {
                // Log the queryURL
                console.log(queryURL2);
                // Log the resulting object
                console.log(response);
            var i = 5
            for (var index = 1; index < 6; index++) {
               var card = $("#card" + index);
               console.log(card); 
               //list date on cards
               var date = moment().add(index,'day').format('L');
               console.log(date);
               //list image
               var icon2 = response.list[i].weather[0].icon;
               var imgTag2= $("<img>").attr("src", "http://openweathermap.org/img/wn/"+icon2+"@2x.png")
               //list temp 
               var temp2 = response.list[i].main.temp
               console.log(temp2);
               //humidity 
               var humidity2=response.list[i].main.humidity
               console.log(humidity2);
               //created a p tag for each card
               var p5= $("<p>").text(date);
               var p6= $("<p>").text("Temperature: " + temp2 + "°F");
               var p7= $("<p>").text("humidity: " + humidity2 +"%");
               //place in card
               card.append(p5,imgTag2,p6,p7);
            //fix for the loop:
            i= i+8;
            
            }
        
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
            var fullDiv = $("<button>").addClass("sH history btn btn-success btn-lg btn-block").attr("data-city", emptyDiv).text(emptyDiv);
            console.log(fullDiv);
//grabbing that text and placing inside the empty div
            $("#emptyDiv").prepend(fullDiv);

            
        }

    }

   

   

//call render city function to keep the data on the page
    renderCities();








})