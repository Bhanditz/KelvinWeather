//this is a constant value of kelvin
const Kelvin = 293;
//this is const for the celsius
const Celsius=Kelvin-273;
//we use celsius to calc farenhit
let Fahrenheit=Celsius * (9/5) + 32;
// using floor method to aprox farenheit value
Fahrenheit= Math.floor(Fahrenheit);
console.log(`The temperature is ${Fahrenheit} degrees Fahrenheit`);
let Newton =Celsius * (33/100);
Newton=Math.floor(Newton);
console.log(`${Celsius} is ${Newton} Newton`);
