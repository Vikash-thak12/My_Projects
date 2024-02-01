const weatherform  = document.querySelector(".weatherform");
const entercity  = document.querySelector(".entercity");
const card  = document.querySelector(".card");
const API  = "04aa3e589306de0671ac9380e78112fd";

weatherform.addEventListener("submit", async event => {

    event.preventDefault();
    const city = entercity.value;

    if (city) {
        try {
            const weatherdata = await getWeatherData(city);
            displayinfo(weatherdata);
        }
        catch(error) {
            console.error(error);
            displayerror(error);
        }

    } else {
        displayerror("Please Enter a city");
    }
});

async function getWeatherData(city) {

    const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API}`;
    const response = await fetch(apiURL);

    console.log(response);

    if(!response.ok)
    {
        throw new Error("Could not fetch the weather")
    }

    return await response.json();
}   

function displayinfo(data) {

    console.log(data);
    const { name: city,
        main: { temp, humidity },
        weather: [{ description, id }] } = data;

    card.textContent = "";
    card.style.display = "flex";

    const displaycity = document.createElement("h1");
    const displaytemp = document.createElement("p");
    const displayhumidity = document.createElement("p");
    const displaymsg = document.createElement("p");
    const displayemoji = document.createElement("p");
    const displayerror = document.createElement("p");


    displaycity.textContent = city;
    displaytemp.textContent = `${Math.round(temp - 273)}°C`;
    displayhumidity.textContent = `Humidity: ${humidity}%`; 
    displaymsg.textContent = description;
    displayemoji.textContent = getWeatherEmoji(id);
    

    displaycity.classList.add("displaycity");
    displaytemp.classList.add("displaytemp");
    displayhumidity.classList.add("displayhumidity");
    displaymsg.classList.add("displaymsg");
    displayemoji.classList.add("displayemoji");


    card.appendChild(displaycity);
    card.appendChild(displaytemp);
    card.appendChild(displayhumidity);
    card.appendChild(displaymsg);
    card.appendChild(displayemoji);
}

function getWeatherEmoji(weatherId) {

    switch(true)
    {
        case (weatherId >= 200 && weatherId < 300):
            return "⛈️";
        case (weatherId >= 300 && weatherId < 400):
            return "🌧️";
        case (weatherId >=400 && weatherId < 500):
            return "☔";
        case (weatherId >= 500 && weatherId <600):
            return "🌨️";
        case (weatherId >= 600 && weatherId < 800):
            return "🛫";
        case (weatherId === 800):
            return "🌇";
        case (weatherId > 800 && weatherId < 810):
            return "☁️";
        default:    
           return "❓";
    }

}

function displayerror(message){

    const errormsg = document.createElement("p");
    errormsg.textContent = message;
    errormsg.classList.add("displayerror");

    card.textContent = "";
    card.style.display = "flex";
    card.appendChild(errormsg);
}