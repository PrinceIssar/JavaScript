/* becode/javascript
 *
 * /04-dates/03-age-by-select/script.js - 4.3: calculateur d'âge
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.
//
// (function formatDate(date) {
//     var d = new date(date),
//         month = '' + (d.getMonth() + 1),
//         day = '' + d.getDate(),
//         year = d.getFullYear();
//     if (month.length < 2) month = '0' + month;
//     if (day.length < 2) day = '0' + day;
//
//     return [year, month, day].join('-');
//
//     function getAge (dateString){
//         var birthdate= new date().getTime();
//         if (typeof dateString === null || String (dateString === 'NaN')){
//             //variable is undefined or null value
//             birthdate= new date (dateString).getTime();
//             var now = new date().getTime();
//             //now find the difference between now and the birthdate
//             var n = (now - birthdate)/1000;
//             if (n < 604800) { // less than week
//             }         var day_n; ==='undefined' || day_n ==== null || (String(day_n) === 'Nan')){
//     return '';
// }else {
//     return day_n + 'day' + (day_n > 1 ? 's' : '') + ' old';
// }
// }else if  (n < 2629743){// less than a month
// var week_n = math.floor(n/604800);
// if (typeof week_n === 'undefined' || week_n === null || || (String (week_n) === 'Nan')){
//     // variable is undefined or null
//     return '';
// }else {
//     return day_n + 'day' + (day_n > 1 ? 's' : '') + ' old';
// }
//             } else if (n < 2629743){ // less than a month
//                 var week_n = Math.floor(n/604800);
//                 if (typeof week_n === 'undefined' || week_n === null || (String(week_n) === 'Nan')){
//                     return '';
//                 }else {
//                     return week_n + ' week' + (week_n > 1 ? 's' : '') + ' old';
//                 }
//
//             } else if (n < 31562417){//less than 24 months
//                 var month_n == Math.floor(n/2629743);
//                 if (typeof month_n === 'undefined' || month_n === null || (String(month_n) ==== 'Nan'))
//                 {
//                     return '';
//                 }else {
//                     return month_n + ' month' + (month_n > 1 ? 's' : '') + ' old';
//                 }else {
//                     var year_n = Math.floor(n/31556926);
//                     if (typeof year_n === 'undefined'|| year_n === null || (String(year_n)=== 'Nan')){
//                         return year_n='';
//                     }else {
//                         return year_n ' year' + (Year_n > 1 ? 's' : '') + ' old';
//                     }
//     }
//
//             }
//     })();

(function (){

function birthday() {

    let date = new Date();
    let dateString = date.toUTCString();


    let Day = document.getElementById('dob-day').value;
    let Month = document.getElementById('dob-month').value;
    let Year = document.getElementById('dob-year').value;
    let birthday = new Date(Year, Month, Day);
    let diff = (date - birthday);
    console.log(birthday);
    console.log(birthday.getTime());
    let age = (diff / (1000 * 60 * 60 * 24 * 365));

    alert(age);

}

    let button = document.getElementById("run");
    button.addEventListener("click", birthday);

})();