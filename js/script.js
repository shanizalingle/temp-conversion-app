 function celToFar(celcius) {
  const cToF = (celcius * 9/5) + 32;
  return cToF;
}   

function farToCel(farenheit) {
  const fToC = (farenheit - 32) * .55555556;
  return fToC;
}

const celcius = parseFloat(prompt("enter celcius temp"));
const farenheit = parseFloat(prompt("enter farenheit temp"));

window.alert(celcius + ' degrees celcius in farenheit is: ' + celToFar(celcius));
window.alert(farenheit + ' degrees farenheit in calcius is: ' + farToCel(farenheit));
