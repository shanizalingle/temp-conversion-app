function tempConvApp (c,f) {
let cToF = (c * 9/5) + 32;
let fToC = (f - 32) * 5/9;
} 



const c = window.prompt("enter celcius temp");
const f = window.prompt("enter farenheit temp");

window.alert(c + " degrees celcius in farenheit is " + cToF);
window.alert(f + " degrees farenheit in celcius is " + fToC);