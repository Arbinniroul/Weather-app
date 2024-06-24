const apiURL = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";
const apiKey=  "29c26f1dcb6e03bb8d2c96ce0459ca41";
const searchbox=document.querySelector(".search");
const searchbtn=document.querySelector(".srbtn");
const weatherIcon=document.querySelector(".wicon")
async function checkWeather(city) {
    try {
        const response = await fetch(apiURL+city+`&appid=${apiKey}`);
        if(response.status == 404){
          document.querySelector(".err").style.display="block";
          document.querySelector(".container").style.height="200px";
          document.querySelector(".wicon").style.display="none";
          document.querySelector(".maincontent").style.display ="none";
          document.querySelector(".footer").style.display = "none";
           
        }                 
        const data = await response.json();
        console.log(data);
        document.querySelector(".dlocation").innerHTML = data.name;
        document.querySelector(".dinfo").innerHTML = data.main.temp;
        document.querySelector(".windspeed").innerHTML=data.wind.speed;
        document.querySelector(".dhumidity").innerHTML=data.main.humidity;
        document.querySelector(".maincontainer").style.display="flex";
        document.querySelector(".footer").style.display="flex";
        document.querySelector(".container").style.height="600px";
        document.querySelector(".err").style.display="none";
        document.querySelector(".wicon").style.display="block";
        if(data.weather[0].main=="Clouds"){
          weatherIcon.src="images/clouds.png";
        }
        else  if(data.weather[0].main=="Rain"){
            weatherIcon.src="images/rain.png";
          }
          else  if(data.weather[0].main=="Clear"){
            weatherIcon.src="images/clear.png";
          }
          else  if(data.weather[0].main=="Drizzle"){
            weatherIcon.src="images/drizzle.png";
          }
          else  if(data.weather[0].main=="Mist"){
            weatherIcon.src="images/mist.png";
          }
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}
searchbtn.addEventListener("click",()=>{
   
    
    checkWeather(searchbox.value);
})

