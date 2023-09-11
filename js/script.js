const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const apiKey="7d61eeaea32f7409948583692a6dfdd0";
const searchBox=document.querySelector('.search input');
const searchBtn=document.querySelector('.search button');
const weatherIcon=document.querySelector(".weather-icon");

async function checkWeather(city)
{
    const res=await fetch(apiUrl+city+"&appid="+apiKey);

    if(res.status==404)
    {
        document.querySelector(".sp").style.display="block";
        document.querySelector(".weather").style.display="none";
    }
    else
    {
        const d=await res.json();
        console.log(d);
        document.querySelector('.temp').innerHTML=Math.round(d.main.temp)+"℃";
        document.querySelector('.city').innerHTML=d.name;
        document.querySelector('.humidity').innerHTML=d.main.humidity +"%";
        document.querySelector('.wind').innerHTML=d.wind.speed +"km";
        //alert(d)
        document.querySelector(".weather").style.display="block";

    if(d.weather[0].main=="Clouds")
    {
        weatherIcon.src="img/clouds.png";
    }
    else if(d.weather[0].main=="Clear")
    {
        weatherIcon.src="img/clear.png";
    }
    else if(d.weather[0].main=="Rain")
    {
        weatherIcon.src="img/rain.png";
    }
    else if(d.weather[0].main=="Mist")
    {
        weatherIcon.src="img/mist.png";
    }
    else if(d.weather[0].main=="Drizzle")
    {
        weatherIcon.src="img/drizzle.png";
    }
    else if(d.weather[0].main=="Haze")
    {
        weatherIcon.src="img/haze.png";
    }
    }   
}
function  fun()
{
    var city=document.querySelector('.search input').value;
    checkWeather(city);
}
