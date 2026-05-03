// Q: Used console.log to display the current year

let dt = Date();
console.log("Full date full year and time : ", dt);

let currentYear = Date();

let newDate = new Date();
console.log("Current Year : ", newDate.getFullYear());
console.log("Current month : ", newDate.getDate());
console.log("Current Day : ", newDate.getDay());

console.log("Today Date :", newDate.getFullYear(), "/", newDate.getDate(), "/", newDate.getDay())