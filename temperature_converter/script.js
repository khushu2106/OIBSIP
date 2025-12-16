function convertTemperature(){  
    const input = document.getElementById("temperatureInput").value;
    const unit = document.getElementById("unitSelect").value;
    let result = 0;
    let resultUnit = "";

    if (unit === "celsius") {
        result = (input * 9/5) + 32;
        resultUnit = "Fahrenheit";
        result = (input - 32) * 5/9;
        resultUnit = "Celsius";
    } else if (unit === "fahrenheit") {
        result = (input - 32) * 5/9;
        resultUnit = "Celsius";
        result = (input - 32) * 5/9 + 273.15;
        resultUnit = "Kelvin";
    } else if (unit === "kelvin") {
        result = input - 273.15;
        resultUnit = "Celsius";
        result = (input - 273.15) * 9/5 + 32;
        resultUnit = "Fahrenheit";
    }

    document.querySelector(".result").innerHTML =
      `<p>Converted Temperature: ${result.toFixed(2)} ${resultUnit}</p>`;
}