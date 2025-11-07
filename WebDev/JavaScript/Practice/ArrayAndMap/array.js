const getting="Hello World";
for (const gettingMsg of getting){
    // console.log(`"Each word =",${gettingMsg}`);
}

// Maps

const map=new Map();

map.set('NPL', "Nepal");
map.set('IND',"India");
map.set("USA","United State of America");
map.set("NPL","Nepal") // No duplicate Entries

// console.log(map);

for (const [key,value] of map) {
    // console.log(key+ ":-" +value);
    
}

// Books Example
const books = [
  {
    name: "Harry Potter and the Philosopher's Stone",
    author: "J.K. Rowling",
    genre: "Fantasy",
    publisher: "Bloomsbury",
    edition: "1st Edition",
    year: 1997,
    price: 350
  },
  {
    name: "The Alchemist",
    author: "Paulo Coelho",
    genre: "Fiction",
    publisher: "HarperCollins",
    edition: "25th Anniversary Edition",
    year: 1988,
    price: 299
  },
  {
    name: "Sapiens: A Brief History of Humankind",
    author: "Yuval Noah Harari",
    genre: "Non-Fiction",
    publisher: "Harvill Secker",
    edition: "Illustrated Edition",
    year: 2011,
    price: 799
  },
  {
    name: "The Grate Human",
    author: "Self",
    genre: "History",
    publisher: " Rohit Publisher",
    edition: "Illustrated Edition",
    year: 1998,
    price: 799
  },
  {
    name: "Rich Dad Poor Dad",
    author: "Robert T. Kiyosaki",
    genre: "Personal Finance",
    publisher: "Plata Publishing",
    edition: "Revised Edition",
    year: 1997,
    price: 250
  },
  {
    name: "Atomic Habits",
    author: "James Clear",
    genre: "Self-help",
    publisher: "Penguin Random House",
    edition: "1st Edition",
    year: 2018,
    price: 450
  }
];

const userBooks=books.filter((bk)=>bk.genre==='History');
console.log(userBooks);

const bookPrice=books.filter((bk)=>bk.price>999);
console.log(bookPrice);

let bookPublic=books.filter((bk)=>bk.year<2003);
console.log(bookPublic);

