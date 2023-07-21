
let formField = document.getElementById("form-container");


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
  let author = document.getElementById("author-name").value;
  let title = document.getElementById("book-title").value;
  let pages = document.getElementById("book-pages").value;
  let checked = document.querySelector("input[name = 'read-book']:checked").value;
  let myBook = new Book(title, author, pages, checked);
  myLibrary.push(myBook);

  let inputs = document.querySelectorAll("input");
  inputs.forEach(i => i.value = " ");
  formField.style.display = "none";
  console.log(myLibrary);
}

let submitBtn = document.querySelector(".submit-btn");
submitBtn.addEventListener("click", addBookToLibrary);


// ADD NEW BOOK FN()
function addNewBook() {
  // let formField = document.getElementById("form-container");
  formField.style.display = "block";
}

const addBookBtn = document.querySelector(".add-book-btn");
addBookBtn.addEventListener("click", addNewBook)

// DOM MANIPULATION
// created card 
let divCard = document.createElement("div");

// created paragraphs
// let author = document.createElement("p");
// author.textContent = "author: " + myLibrary[0].author;

// let title = document.createElement("p");
// title.textContent = "title: " + myLibrary[0].title;

// let pages = document.createElement("p");
// pages.textContent = "pages: " + myLibrary[0].pages;

// let readBook = document.createElement("p");
// readBook.textContent = "readBook: " + myLibrary[0].readBook;

// append all paragraphs to created card
// divCard.append(author, title, pages, readBook);
// divCard.classList.add("book-card")

// select book-card-container
const cardContainer = document.querySelector(".book-cards-container");

// append created card to book-cards-container
cardContainer.append(divCard);
console.log(cardContainer);
