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
}