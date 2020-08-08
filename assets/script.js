
var cityStorage = JSON.parse(localStorage.getItem("cityArray")) || [];


$(".searchBtn").on("click", function(event) {
    event.preventDefault();
    var citySearch = $(".search-field").val();
    $(".search-field").val("");
    
    var queryUrl = `https://api.opencagedata.com/geocode/v1/json?q=${citySearch}&key=71f35abc91ef43c18aeb87f27621ea77`;
    $.ajax({
        url: queryUrl,
        method: "GET"
    })
    .then(function (response) {
        
        if (!cityStorage.includes(citySearch)) {
            cityStorage.push(citySearch)
            localStorage.setItem("cityArray", JSON.stringify(cityStorage));
        }
        
        cityStorage = JSON.parse(localStorage.getItem("cityArray"))

        for (var i = 0; i < cityStorage.length; i++) {
            var cityDiv = $("<div>");
            cityDiv.append(
                "<button type='button' id='cityBtn' class='btn btn-light' value='" + cityStorage[i] + "'>" + cityStorage[i] + "</button>"
            );
            
            $(".search-history").prepend(cityDiv);
        }

        var latitude = response.results[0].geometry.lat;
        var longitude = response.results[0].geometry.lng;

        $.ajax({
            url: `https://api.openweathermap.org/data/2.5/uvi?lat=${latitude}&lon=${longitude}&appid=70d34bb5d26d0d84977d215fbdeeba67`,
            method: "GET"
        })
        .then(function (response) {
            console.log('Lat/Lon response: ', response)
            var uvindex = response.value;
            $(".uvindex").empty().append("UV Index - " + uvindex);

            var uvindexNum = $("<span>").text(uvindex).attr("id", "UVIndex");
            if (uvindex < 3) {
              uvindexNum.attr("style", "background-color: green");
            } else if (uvindex > 7) {
              uvindexNum.attr("style", "background-color: red");
            } else {
              uvindexNum.attr("style", "background-color: yellow");
            }
            $(".uvindex").empty().append(uvindexNum);
            
            $.ajax({
                url: `https://api.openweathermap.org/data/2.5/weather?q=${citySearch}&units=imperial&appid=70d34bb5d26d0d84977d215fbdeeba67`,
                method: "GET"
            })
            .then(function (response) {
                console.log(response)
                var name = response.name;
                var icon = "http://openweathermap.org/img/w/" + response.weather[0].icon + ".png";
                var temp = Math.floor(response.main.temp);
                var weather = response.weather[0].main;
                var humidity = response.main.humidity;
                var windspeed = response.wind.speed;
                $(".name").empty().append(name);
                $(".icon").attr("src", icon);
                $(".weather").empty().append(weather);
                $(".temp").empty().append("Temperature - " + temp + " degrees F");
                $(".humidity").empty().append("Humidity - " + humidity + " %");
                $(".windspeed").empty().append("Wind Speed - " + windspeed + " MPH");
                $.ajax({
                    url: `https://api.openweathermap.org/data/2.5/forecast?q=${citySearch}&units=imperial&appid=70d34bb5d26d0d84977d215fbdeeba67`,
                    method: "GET"
                })
                .then(function (response) {
                    
                    var icon = "http://openweathermap.org/img/w/" + response.list[3].weather[0].icon + ".png";
                    var temp = Math.floor(response.list[3].main.temp_max);
                    var weather = response.list[3].weather[0].main;
                    var humidity = response.list[3].main.humidity
                    var day = response.list[3].dt_txt;
                    $(".day1").empty().append(day);
                    $(".icon1").attr("src", icon);
                    $(".weather1").empty().append(weather);
                    $(".temp1").empty().append("Temperature - " + temp + " degrees F");
                    $(".humidity1").empty().append("Humidity - " + humidity + " %");
                    var icon = "http://openweathermap.org/img/w/" + response.list[11].weather[0].icon + ".png";
                    var temp = Math.floor(response.list[11].main.temp_max);
                    var weather = response.list[11].weather[0].main;
                    var humidity = response.list[11].main.humidity
                    var day2 = response.list[11].dt_txt;
                    $(".day2").empty().append(day2)
                    $(".icon2").attr("src", icon);
                    $(".weather2").empty().append(weather);
                    $(".temp2").empty().append("Temperature - " + temp + " degrees F");
                    $(".humidity2").empty().append("Humidity - " + humidity + " %");
                    var icon = "http://openweathermap.org/img/w/" + response.list[19].weather[0].icon + ".png";
                    var temp = Math.floor(response.list[19].main.temp_max);
                    var weather = response.list[19].weather[0].main;
                    var humidity = response.list[19].main.humidity;
                    var day3 = response.list[19].dt_txt;
                    $(".day3").empty().append(day3)
                    $(".icon3").attr("src", icon);
                    $(".weather3").empty().append(weather);
                    $(".temp3").empty().append("Temperature - " + temp + " degrees F");
                    $(".humidity3").empty().append("Humidity - " + humidity + " %");
                    var icon = "http://openweathermap.org/img/w/" + response.list[27].weather[0].icon + ".png";
                    var temp = Math.floor(response.list[27].main.temp_max);
                    var weather = response.list[27].weather[0].main;
                    var humidity = response.list[27].main.humidity
                    var day4 = response.list[27].dt_txt;
                    $(".day4").empty().append(day4)
                    $(".icon4").attr("src", icon);
                    $(".weather4").empty().append(weather);
                    $(".temp4").empty().append("Temperature - " + temp + " degrees F");
                    $(".humidity4").empty().append("Humidity - " + humidity + " %");
                    var icon = "http://openweathermap.org/img/w/" + data.list[35].weather[0].icon + ".png";
                    var temp = Math.floor(data.list[35].main.temp_max);
                    var weather = data.list[35].weather[0].main;
                    var humidity = data.list[35].main.humidity
                    var day5 = response.list[35].dt_txt;
                    $(".day5").empty().append(day5)
                    $(".icon5").attr("src", icon);
                    $(".weather5").empty().append(weather);
                    $(".temp5").empty().append("Temperature - " + temp + " degrees F");
                    $(".humidity5").empty().append("Humidity - " + humidity + " %");

                    function clearTheCard(card) {
                        document.getElementById(searchBtn).on('click')
                        document.getElementById(card);
                        var defaultValue = card.defaultValue;
                        var currentValue = card.value;
                        if(currentValue == "") {
                            card.value == defaultValue;
                            return;
                        }
                        if(currentValue == defaultValue) {
                            card.value === '';
                            return false;
                        }
                    }
                })
            })
        })
    })
})

        