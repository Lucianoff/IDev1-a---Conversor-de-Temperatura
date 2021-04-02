var valCelsius = prompt("Qual valor em Celcius a ser convertido em Fahrenheit?")
valCelsius = parseFloat(valCelsius)
var valFahrenheit = (valCelsius * 9/5) + 32
valFahrenheit = valFahrenheit.toFixed(1)
alert(valFahrenheit)
