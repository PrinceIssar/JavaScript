/* becode/javascript
 *
 * /05-arrays/02-manipulate-array/script.js - 5.2: manipulation de tableau
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    var fruits = [
        "pomme",
        "poire",
        "fraise",
        "tomate",
        "orange",
        "mandarine",
        "durian",
        "pêche",
        "raisin",
        "cerise",
    ];

    fruits.shift();
    fruits.unshift ('Banana')
    fruits.pop();
    fruits.push('Kiwi');

  /*  <---- 2nd way to do --->
  var new_fruits = fruits;
  new_fruits[0] ="Banana" ;
    new_fruits[9] ="Kiwi" ;
    console.log(new_fruits);
*/

    document.getElementById("run").addEventListener("click", function () {
        console.log(fruits);
    });

})();
