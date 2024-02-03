const BASE_URL =
  "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies";



const dropdowns = document.querySelectorAll(".dropdown select");

for (let select of dropdowns) {
    for (let currCode in countryList) {
        let newoption = document.createElement("Option");
        newoption.innerText = currCode;
        newoption.value = currCode;
        if(select.name === "from" && currCode === "USD")
        {
            newoption.selected = "selected";
        } else if(select.name === "To" && currCode === "INR")
        {
            newoption.selected = "selected";
        }
        select.append(newoption);
    }
    select.addEventListener("change", (event) => {
        updateFlag(event.target);
    });
}

const updateFlag = (element) => 
{
    let currCode = element.value;
    let countrycode = countryList[currCode];
    let newSrc = `https://flagsapi.com/${countrycode}/flat/64.png`;
    let img = element.parentElement.querySelector("img");
    img.src = newSrc;
}