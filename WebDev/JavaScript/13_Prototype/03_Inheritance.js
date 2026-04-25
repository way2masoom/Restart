// Inheritance in Js with basic example

// Parent Class(Base Class)
class Event {
    constructor(name, date) {
        this.name = name;
        this.date = date;
    }

    // Parent method
    bookEvent() {
        console.log(`Booking event: ${this.name} on ${this.date}`);
    }
}

// Child Class 1(Movie)
class Movie extends Event {
    constructor(name, date, screenType) {
        // Calling parent constructor
        super(name, date);

        // Child's own property
        this.screenType = screenType;
    }

    // Child method
    playMovie() {
        console.log(`Movie will play on ${this.screenType} screen`);
    }
}

// Creating an object
const movie = new Movie("Avengers", "10 May", "IMAX");
console.log(movie);

// Parent method (inherited)
movie.bookEvent();

// Child method
movie.playMovie();

console.log(movie.prototype.__proto__);