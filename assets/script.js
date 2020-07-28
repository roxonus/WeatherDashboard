const api = {
    key: "70d34bb5d26d0d84977d215fbdeeba67",
    baseurl: "https://api.openweathermap.org/data/2.5/"
}

var todayqueryURL;
var fivedayqueryURL;
var uviqueryURL;
var latitude;
var longitude;
var citySearch = "Seattle";
var cityStorage

//current weather api
var todayqueryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + citySearch + "&appid=70d34bb5d26d0d84977d215fbdeeba67";

//5 day weather api
var fivedayqueryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + citySearch + "&appid=70d34bb5d26d0d84977d215fbdeeba67";

//current uv index
uviqueryURL = "https://api.openweathermap.org/data/2.5/uvi?appid=70d34bb5d26d0d84977d215fbdeeba67&lat=" + latitude + "&lon=" + longitude;


// function to convert latitude.Longitude to city name

// current weather
$.getJSON("https://api.openweathermap.org/data/2.5/weather?q=" + citySearch + "&units=imperial&appid=70d34bb5d26d0d84977d215fbdeeba67", function(data){
    console.log(data);
    var icon = "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
    var temp = Math.floor(data.main.temp);
    var weather = data.weather[0].main;
    var humidity = data.main.humidity
    //var windspeed =

    $(".icon").attr("src", icon);
    $(".weather").append(weather);
    $(".temp").append("Temperature " + temp + " degrees F");
    $(".humidity").append("Humidity " + humidity + " %");
});

// 5 day forecast day 1
$.getJSON("https://api.openweathermap.org/data/2.5/forecast?q=" + citySearch + "&units=imperial&appid=70d34bb5d26d0d84977d215fbdeeba67", function(data){
    console.log(data)
    var icon = "http://openweathermap.org/img/w/" + data.list[3].weather[0].icon + ".png";
    var temp = Math.floor(data.list[3].main.temp_max);
    var weather = data.list[3].weather[0].main;
    var day = data.list[3].dt_text;

    $(".day1").append(day);
    $(".icon1").attr("src", icon);
    $(".weather1").append(weather);
    $(".temp1").append(temp);
    
});

//5 day forecast day 2
$.getJSON("https://api.openweathermap.org/data/2.5/forecast?q=" + citySearch + "&units=imperial&appid=70d34bb5d26d0d84977d215fbdeeba67", function(data){
    console.log(data)
    var icon = "http://openweathermap.org/img/w/" + data.list[11].weather[0].icon + ".png";
    var temp = Math.floor(data.list[11].main.temp_max);
    var weather = data.list[11].weather[0].main;

    $(".day2").append()
    $(".icon2").attr("src", icon);
    $(".weather2").append(weather);
    $(".temp2").append(temp);
});

// 5 day forecast day 3
$.getJSON("https://api.openweathermap.org/data/2.5/forecast?q=" + citySearch + "&units=imperial&appid=70d34bb5d26d0d84977d215fbdeeba67", function(data){
    console.log(data)
    var icon = "http://openweathermap.org/img/w/" + data.list[19].weather[0].icon + ".png";
    var temp = Math.floor(data.list[19].main.temp_max);
    var weather = data.list[19].weather[0].main;

    $(".day3").append()
    $(".icon3").attr("src", icon);
    $(".weather3").append(weather);
    $(".temp3").append(temp);
});

// 5 day forecast day 4
$.getJSON("https://api.openweathermap.org/data/2.5/forecast?q=" + citySearch + "&units=imperial&appid=70d34bb5d26d0d84977d215fbdeeba67", function(data){
    console.log(data)
    var icon = "http://openweathermap.org/img/w/" + data.list[27].weather[0].icon + ".png";
    var temp = Math.floor(data.list[27].main.temp_max);
    var weather = data.list[27].weather[0].main;

    $(".day4").append()
    $(".icon4").attr("src", icon);
    $(".weather4").append(weather);
    $(".temp4").append(temp);
});

// 5 day forecast day 5
$.getJSON("https://api.openweathermap.org/data/2.5/forecast?q=" + citySearch + "&units=imperial&appid=70d34bb5d26d0d84977d215fbdeeba67", function(data){
    console.log(data)
    var icon = "http://openweathermap.org/img/w/" + data.list[35].weather[0].icon + ".png";
    var temp = Math.floor(data.list[35].main.temp_max);
    var weather = data.list[35].weather[0].main;

    $(".day4").append()
    $(".icon5").attr("src", icon);
    $(".weather5").append(weather);
    $(".temp5").append(temp);
});

