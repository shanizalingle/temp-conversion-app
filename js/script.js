
const celcius = parseInt(prompt("enter celcius temp"));
const farenheit = parseInt(prompt("enter farenheit temp"));

function celToFar(celcius) {
  const cToF = (celcius * 9/5) + 32;
  return cToF;
}   

function farToCel(farenheit) {
  const fToC = (farenheit - 32) * 5/9;
  return fToC;
}

celToFar();
farToCel();

window.alert(celcius + " degrees ");

window.alert(celcius + " degrees celcius in farenheit is " + cToF);
window.alert(farenheit + " degrees farenheit in celcius is " + fToC);
