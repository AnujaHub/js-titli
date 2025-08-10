const apiKey = "703edfa15f7c49de8e9151011251207"; // get from https://openweathermap.org/api

const cityInput = document.getElementById("cityInput");
const getWeather = document.getElementById("getWeather");
const weatherOutput = document.getElementById("weatherOutput");

getWeather.onclick = async () => {
  const city = cityInput.value;
  const url = `http://api.weatherapi.com/v1/current.json?key=703edfa15f7c49de8e9151011251207&q=${city}&aqi=yes`;

//   work on  error handling for wrong city


  try {
    const response = await fetch(url); //ftech data first
    const data = await response.json(); //convert to usable json 
 const temp = data.current.temp_c;
const condition = data.current.condition.text;
// json representation
// current and condition being an object
// {
//   "current": {
//     "temp_c": 28.3,
//     "condition": {
//       "text": "Partly cloudy"
//     }
//   }
// }


    // Simple Titli message
    let message = `It's ${temp}°C and ${condition} in ${city}.`;
    if (condition === "Rain") {
      message += " Stay cozy — maybe sip something warm 💖";
    } else if (temp > 30) {
      message += " Don’t forget to stay hydrated today! 💦";
    }

    weatherOutput.textContent = message;
  } catch {
    weatherOutput.textContent = "Couldn't fetch weather. Try again?";
  }
  


};
