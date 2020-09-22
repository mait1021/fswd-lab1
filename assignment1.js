function convertToC(fahrenheit){
    var celsius;

    celsius = ((fahrenheit - 32) * (5 / 9));

    console.log("The room temperature in Celsius is: " + celsius)

    if (fahrenheit >= 90) {
        console.log("The room is too hot! Turn on your air conditioner.");
    } else if (fahrenheit <= 50) {
        console.log("It is getting cold! Turn on the heater.");
    } else {
        console.log("The temperature is good!")
    }

    return fahrenheit;
    }


function convertToF(celsius){
    var fahrenheit;

    fahrenheit = ((celsius) * (9 / 5)) + 32;

    console.log("The room temperature in Fahrenheit is: " + fahrenheit)

    if (celsius >= 32) {
        console.log("The room is too hot! Turn on your air conditioner.");
    } else if (celsius <= 10) {
        console.log("It is getting cold! Turn on the heater.");
    } else {
        console.log("The temperature is good!")
    }


    return celsius;

    }

    convertToC(-10);
    convertToC(-3.56);
    convertToC(51);
    convertToC(60.5);
    convertToC(100);

    convertToF(-15.45);
    convertToF(-2);
    convertToF(11);
    convertToF(25);
    convertToF(39.95);