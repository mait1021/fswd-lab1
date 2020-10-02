
//part a: require your lab-three files
var response= require('./lab-three.js');
console.log(response);


//part b: invokes the makeCalendar() function 

//part c: another method "getDayOfTheWeekForUserDate"
//we downloaded the readline-sync but we were unable to link to here :-(

var readlineSync = require('readline-sync')

var userMonth = readlineSync.question('Enter the month');

var userDay = readlineSync.question('Enter the day');

var userYear = readlineSync.question('Enter the year');

console.log(month + "-" + day + "-" + year + "is");

import getDayOfTheWeek from "./lab-three";

getDayOfTheWeekForUserDate();