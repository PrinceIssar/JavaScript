/* becode/javascript
 *
 * /01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function response() {

alert ("Ready to give your info?")
var age,gender, city;
age = prompt("What's your age?");
gender = prompt("What is gender?");
city = prompt("Which city do you live in?");


var result = confirm(`Your responses :
age : ${age}
gender: ${gender}
city  : ${city}
Click OK to accept`);
if (result !== true){
    response();
}
 })();
