

function Book(title, author, pages, readBook) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.readBook = readBook;
  this.info = function() {
    return `${this.title} written by ${this.author}, has ${this.pages} & I have ${this.readBook} it.`
  }
}

const book1 = new Book("Rational Male", "Rollo Tommasi", 678, "read");

console.log(Object.getPrototypeOf((Book.prototype)));