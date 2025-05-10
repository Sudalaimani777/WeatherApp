// 8a8c936ffabc4b998464bef491928c74

const apiKey = "8a8c936ffabc4b998464bef491928c74";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const search = document.getElementById("searchBox");
const btn = document.getElementById("searchBtn");
const weatherIcon = document.getElementById("weatherIcon");


//ASYNC FUNCTION
const checkWeather = async (city) => {  
     //AWAIT AND FETCH THE API KEY AND URL
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    //IF THE CITY NAME IS INVALID
    if (response.status == 404) {
        document.querySelector(".errorContainer").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }
    else {

        let data = await response.json();  //STORE THE API DATA IN THE DATA VARIABLE
        console.log(data);

        const City = document.getElementById("City").innerText = data.name;
        console.log(City);

        const Temp = document.getElementById("Temp").innerText = Math.floor(data.main.temp) + "°c";
        console.log(Temp);

        const humidity = document.getElementById("Humidity").innerText = data.main.humidity + "%";
        console.log(humidity);

        const wind = document.getElementById("Wind").innerText = data.wind.speed + "Km/h";
        console.log(wind);

        //FOR CHANGING THE WEATHER IMAGES BASED ON THE WEATHER CONDITIONS

        if (data.weather[0].main == "Clouds") {
            weatherIcon.src = "images/clouds.png";
        }
        else if (data.weather[0].main == "Clear") {
            weatherIcon.src = "images/clear.png"
        }
        else if (data.weather[0].main == "Rain") {
            weatherIcon.src = "images/rain.png"
        }
        else if (data.weather[0].main == "Drizzle") {
            weatherIcon.src = "images/drizzle.png"
        }
        else if (data.weather[0].main == "Mist") {
            weatherIcon.src = "images/mist.png"
        }
        else if (data.weather[0].main == "Snow") {
            weatherIcon.src = "images/snow.png"
        }
        else if (data.weather[0].main == "Wind") {
            weatherIcon.src = "images/wind.png"
        }

         document.querySelector(".weather").style.display = "block";
         document.querySelector(".errorContainer").style.display = "none";
    }

}

btn.addEventListener("click", () => {
    checkWeather(search.value);
});

