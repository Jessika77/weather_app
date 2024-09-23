const Apikey = "8ee2b88913cd110431a81a1e82d65952";
const Apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const Searchbox = document.querySelector(".search input");
const Searchbtn = document.querySelector(".search button");
const Weathericon = document.querySelector(".weather-icon");

async function checkWeather(city){
    const response = await fetch(Apiurl + city + `&appid=${Apikey}`);
    var data = await response.json();

    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
    document.querySelector(".humidity").innerHTML = data.main.humidity +"%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/hr"; 

    if(data.weather[0].main == "Clouds"){
        Weathericon.src = "images/clouds.png";
    }
    else if(data.weather[0].main == "Clear"){
        Weathericon.src = "images/clear.png";
    }
    else if(data.weather[0].main == "Rain"){
        Weathericon.src = "images/rain.png";
    }
    else if(data.weather[0].main == "Drizzle"){
        Weathericon.src = "images/drizzle.png";
    }
    else if(data.weather[0].main == "Mist"){
        Weathericon.src = "images/mist.png";
    }

    document.querySelector(".weather").style.display ="block";
        
    
}

Searchbtn.addEventListener("click", ()=>{
    checkWeather(Searchbox.value);
})

