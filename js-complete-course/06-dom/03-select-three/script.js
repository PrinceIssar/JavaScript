/* becode/javascript
 *
 * /06-dom/03-select-three/script.js - 6.3: sélection multiple par sélecteur css
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {

    // your code here
    var queryAll = document.querySelectorAll(".target");
    queryAll.forEach((element) => {
        element.textContent = "Owned";
    })

    // queryAll.forEach(function (x){  // function  with parameter x will replace every P
    //     x.textContent= "Owned";
    // })
})();

