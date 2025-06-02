/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 9
   Tutorial Case

   Countdown Clock
   Author: Sukhnoor Singh
   Date:  02-06-2025

*/



// Dislpay the time left until New Years Eve Bash
document.getElementById("days").textContent = `dd`;
document.getElementById("hrs").textContent = `hh`;
document.getElementById("mins").textContent = `mm`;
document.getElementById("secs").textContent = `ss`;

// Store current date & time
var currentDay = new Date();
var dateStr = currentDay.toLocaleDateString();
var timeStr = currentDay.toLocaleTimeString();


//Displays current date & time
document.getElementById("dateNow").innerHTML = 
dateStr + "<br />" + timeStr;