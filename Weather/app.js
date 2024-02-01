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
            displayinfo(data);
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

}

function displayinfo(data) {

}

function getWeatherEmoji(weatherId) {

}

function displayerror(message){

    const errormsg = document.createElement("p");
    errormsg.textContent = message;
    errormsg.classList.add("displayerror");

    card.textContent = "";
    card.style.display = "flex";
    card.appendChild(errormsg);
}