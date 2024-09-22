// Function to convert Fahrenheit to Celsius
function fahrenheitToCelsius(fahrenheit) {
    return ((fahrenheit - 32) * 5) / 9;
}

// Function to convert Celsius to Fahrenheit
function celsiusToFahrenheit(celsius) {
    return (celsius * 9) / 5 + 32;
}

// Read input from the command line
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

// Prompt the user for input
readline.question('Enter temperature value and unit (e.g., 100F or 37C): ', (input) => {
    const value = parseFloat(input.slice(0, -1));
    const unit = input.slice(-1).toUpperCase();

    if (isNaN(value)) {
        console.log("Please enter a valid number.");
    } else if (unit === 'F') {
        const celsius = fahrenheitToCelsius(value);
        console.log(`${value}°F is equal to ${celsius.toFixed(2)}°C`);
    } else if (unit === 'C') {
        const fahrenheit = celsiusToFahrenheit(value);
        console.log(`${value}°C is equal to ${fahrenheit.toFixed(2)}°F`);
    } else {
        console.log("Please enter a valid unit (F for Fahrenheit, C for Celsius).");
    }

    // Close the readline interface
    readline.close();
});
