const display = document.getElementById("display");

function appendToDisplay(input)
{
    display.value += input;
}

function clearDisplay()
{
    display.value = "";
}

function removeLastDigit() {
    // var display = document.getElementById('display');
    var currentValue = display.value;

    // Check if there is anything to remove
    if (currentValue.length > 0) {
      // Remove the last character
      display.value = currentValue.slice(0, -1);
    }
  }
function calculate()
{
    // for error handling 
   try
   {

    var result = eval(display.value);
    result = parseFloat(result.toFixed(3));
    display.value = result;
   }
   catch(error)
   {
    display.value = "Error";
   }

}
