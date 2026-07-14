let temperature = 27;
let windSpeed = 16;

let windchill = calculateWindChill(temperature, windSpeed);
document.getElementById("windChill").textContent = windchill;


function calculateWindChill(temperature, windSpeed) {
    if (temperature > 50 || windSpeed <= 3) {
        return "N/A";
    } 
                        
    const windchill = 35.74 + (0.6215 * temperature) - (35.75 * Math.pow(windSpeed, 0.16))
    return windchill.toFixed(1);
} 