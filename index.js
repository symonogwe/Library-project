

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
console.log(myLibrary[0]);

// DOM MANIPULATION
// created card 
let divCard = document.createElement("div");

// created paragraphs
let author = document.createElement("p");
author.textContent = "author: " + myLibrary[0].author;

let title = document.createElement("p");
title.textContent = "title: " + myLibrary[0].title;

let pages = document.createElement("p");
pages.textContent = "pages: " + myLibrary[0].pages;

let readBook = document.createElement("p");
readBook.textContent = "readBook: " + myLibrary[0].readBook;

// append all paragraphs to created card
divCard.append(author, title, pages, readBook);
divCard.classList.add("book-card")

// select book-card-container
const cardContainer = document.querySelector(".book-cards-container");

// append created card to book-cards-container
cardContainer.append(divCard);
console.log(cardContainer);
