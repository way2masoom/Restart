// date function
let d = new Date();
console.log(d);

console.log("date = " + d.getDate());
console.log("Day = " + d.getDay());

// more getters
console.log("Year = " + d.getFullYear());
console.log("Month (0-11) = " + d.getMonth());
console.log("Hours = " + d.getHours());
console.log("Minutes = " + d.getMinutes());
console.log("Seconds = " + d.getSeconds());
console.log("Milliseconds = " + d.getMilliseconds());
console.log("Timestamp (ms) = " + d.getTime());

// setters examples
let d2 = new Date();
d2.setFullYear(2026);
d2.setMonth(0); // january
console.log("modified date = " + d2);


