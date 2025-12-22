function convertTemperature(){  
    const input = parseFloat(document.getElementById("temperatureInput").value);
    const unit = document.getElementById("unitSelect").value;
    if(isNaN(input)){
        alert('please enter any number')
        return;
    }
    let result = '';

    if(unit === "Kelvin"){
        result = `Celcius : ${(input -273.15).toFixed(2)} S <br>
        Fahrenheit : ${((input -273.15)*9/5+32).toFixed(2)} F`;
    }
    else if(unit === "Celsius"){
        result = `Fahrenheit : ${(input *9/5 + 32).toFixed(2)} F <br>
        Kelvin :${(input + 273.15).toFixed(2)} K`;
    }
    else if(unit === 'Fahrenheit'){
        result = `Celsius : ${((input - 32)*5/9).toFixed(2)} C <br>
        Kelvin : ${((input-32*5/9)+273.15).toFixed(2)} K`;
    }
    document.querySelector(".result").innerHTML = result;
}
