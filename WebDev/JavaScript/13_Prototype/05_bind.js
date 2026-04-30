// parent function
function events(name, date) {
    this.name = name;
    this.date = date;
    console.log(`Booking event: ${this.name} on ${this.date}`);
}

events.prototype.bookEvent = function () {
    console.log("booking event");
}
console.log(events.prototype);
 
// another function movie
function movie(name) {
    this.name = name;
}
movie.prototype.__proto__ = events.prototype;
const c = new movie("Avenger");
console.log("New movie =", c);

console.log(c.bookEvent());
