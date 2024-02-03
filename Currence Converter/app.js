const BASE_URL =
  "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies";



const dropdowns = document.querySelectorAll(".dropdown select");
const btn = document.querySelector(".btn");
const fromCurr = document.querySelector(".from select");
const toCurr = document.querySelector(".To select");
const msg = document.querySelector(".msg");


window.addEventListener("load", () => {
    updateExchangeRate();
})


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

btn.addEventListener("click" , (event) => {
    event.preventDefault();
    updateExchangeRate();
   
})

const updateExchangeRate = async () => {
    let amount = document.querySelector(".amount input");
    let amtVal = amount.value;
    if(amtVal == "" || amtVal < 1) {
        amtVal = 1;
        amount.value = "1";
    }

    // console.log(fromCurr.value, toCurr.value);
    const url = `${BASE_URL}/${fromCurr.value.toLowerCase()}/${toCurr.value.toLowerCase()}.json`;
    let response = await fetch(url);
    let data = await response.json();
    let rate = data[toCurr.value.toLowerCase()];

    let finalAmount = rate * amtVal;
    // console.log(finalAmount);

    msg.innerText = `${amtVal} ${fromCurr.value} = ${finalAmount} ${toCurr.value}`
}