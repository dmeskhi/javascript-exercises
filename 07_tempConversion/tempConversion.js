const convertToCelsius = function(fahrenheit) {  
  const farTemp = fahrenheit;
  const farToCel = Math.round((farTemp - 32) * (5 / 9) * 10) / 10;
  return farToCel;
};

const convertToFahrenheit = function(celsius) {
  const celTemp = celsius;
  const celToFar = Math.round(((celTemp * 9) / 5 + 32) * 10) / 10;
  return celToFar;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
