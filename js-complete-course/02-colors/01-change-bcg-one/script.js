/* becode/javascript
 *
 * /03-colors/01-change-bcg-one/script.js - 3.1: couleur de fond (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.
//
// (function color () {
// var  red =getComputedStyle(x);
// var  id =id.backgroundColor;
// document.getElementsByTagName("body")[0].style.backgroundColor=id;
//
// })();
// //
// const  = (id) => {
//     document.vody.style.background = document.getElementById(id).innerHTML;
// // }
//
// let colors ['red','green','yellow','blue'
//
//     let red = document.getElementByiD('red')
// function red()
// {
//     document.getElementById('p2').style.color="red";
// }
//
// (function handleonchangeevent(x) {
//     document.bgColor =x;
//
//
// })();
(function color () {
    let page = document.querySelector('body')

    let red = document.querySelector('#red')

    red.addEventListener("click", changered);
    function changered(){
        page.style.backgroundColor= 'red';
    }

})();


(function color () {
    let page = document.querySelector('body')

    let green = document.querySelector('#green')

    green.addEventListener("click", changered);
    function changered(){
        page.style.backgroundColor= 'green';
    }

})();


(function color () {
    let page = document.querySelector('body')

    let yellow = document.querySelector('#yellow')

    yellow.addEventListener("click", changered);
    function changered(){
        page.style.backgroundColor= 'yellow';
    }

})();


(function color () {
    let page = document.querySelector('body')

    let blue = document.querySelector('#blue')

    blue.addEventListener("click", changered);
    function changered(){
        page.style.backgroundColor= 'blue';
    }

})();



















