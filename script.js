
document.getElementById('convert-btn').addEventListener('click', function () {
    // Fetch input values
    const tempInput = document.getElementById('temp-input').value;
    const unitSelector = document.getElementById('unit-selector').value;
    const resultDiv = document.getElementById('result');

    // Check if the input is valid
    if (isNaN(tempInput) || tempInput.trim() === "") {
        resultDiv.textContent = "Please enter a valid number for temperature.";
        return;
    }

    const temperature = parseFloat(tempInput);
    let convertedTemp = '';
    let resultText = '';

    // Perform conversions based on the selected unit
    switch (unitSelector) {
        case 'Celsius':
            convertedTemp = `Fahrenheit: ${(temperature * 9/5 + 32).toFixed(2)} °F, Kelvin: ${(temperature + 273.15).toFixed(2)} K`;
            break;
        case 'Fahrenheit':
            convertedTemp = `Celsius: ${((temperature - 32) * 5/9).toFixed(2)} °C, Kelvin: ${(((temperature - 32) * 5/9) + 273.15).toFixed(2)} K`;
            break;
        case 'Kelvin':
            convertedTemp = `Celsius: ${(temperature - 273.15).toFixed(2)} °C, Fahrenheit: ${((temperature - 273.15) * 9/5 + 32).toFixed(2)} °F`;
            break;
        default:
            resultText = "Please select a valid unit.";
            break;
    }

    // Display the result
    resultDiv.textContent = convertedTemp;
});
