

// LIBRARY ARRAY OF BOOK OBJECTS

let myLibrary = [];

// BOOK CONSTRUCTOR FUNCTION

function Book(title, author, pages, readBook) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.readBook = readBook;
  this.info = function() {
    return `${this.title} written by ${this.author}, has ${this.pages} & I have ${this.readBook} it.`
  }
}

// FUNCTION THAT ADDS BOOKS TO LIBRARY ARRAY

function addBookToLibrary() {
    let myBook = new Book("Rational Male", "Rollo Tommasi", 678, "read");
    myLibrary.push(myBook);
}

addBookToLibrary();
console.log(myLibrary);

// const book1 = new Book("Rational Male", "Rollo Tommasi", 678, "read");
