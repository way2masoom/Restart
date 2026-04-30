// Super function helps to call the parent constructor paramenters

// creating an event class as parent class
class Events {
    constructor(dateOfEvent) {
        this.dateOfEvent = dateOfEvent;
    }

    bookevent() {
        console.log("Booking Event");

    }
}

// creating an child event movie with the prorpert of Events class
class Movie extends Events {
    constructor(movieName, movieDate) {
        super(movieDate); // calling dateofevent from the parent class directly
        this.movieName = movieName;
    }
}

// creating an object
const newMovie = new Movie("Avenger", "2026/07/26");
console.log(newMovie);
