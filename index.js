
// GLOBAL VARIABLES
let formField = document.getElementById("form-container");
const cardContainer = document.querySelector(".book-cards-container");
const libContainer = document.querySelector(".lib-container");


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

// GENERIC PREDEFINED BOOKS
let book1 = new Book("JS for beginners", "Symon", 678, "read");
let book2 = new Book("CSS for you", "Opondi", 786, "read");

myLibrary.push(book1)
myLibrary.push(book2)
console.log(myLibrary);

// FUNCTION THAT ADDS BOOKS TO LIBRARY ARRAY
function addBookToLibrary() {
  libContainer.classList.remove("blur-class");

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
  displayBooks();
}

let submitBtn = document.querySelector(".submit-btn");
submitBtn.addEventListener("click", addBookToLibrary);


// ADD NEW BOOK FN()
function addNewBook() {
  formField.style.display = "block";
  libContainer.classList.add("blur-class");
}

const addBookBtn = document.querySelector(".add-book-btn");
addBookBtn.addEventListener("click", addNewBook)

// DOM MANIPULATION
// function that displays books to the page
function displayBooks() {
  if (cardContainer.innerHTML === "") {
    myLibrary.forEach(obj => {
      let divCard = document.createElement("div");
      
      let author = document.createElement("p");
      author.textContent = "author: " + obj.author;
  
      let title = document.createElement("p");
      title.textContent = "title: " + obj.title;
  
      let pages = document.createElement("p");
      pages.textContent = "pages: " + obj.pages;
  
      let readBook = document.createElement("p");
      readBook.textContent = "readBook: " + obj.readBook;
  
      divCard.append(author, title, pages, readBook);
  
      cardContainer.append(divCard);
      console.log(cardContainer);
    });
  } else {
    let divCard = document.createElement("div");

    let author = document.createElement("p");
    author.textContent = "author: " + myLibrary[myLibrary.length - 1].author;

    let title = document.createElement("p");
    title.textContent = "title: " + myLibrary[myLibrary.length - 1].title;

    let pages = document.createElement("p");
    pages.textContent = "pages: " + myLibrary[myLibrary.length - 1].pages;

    let readBook = document.createElement("p");
    readBook.textContent = "readBook: " + myLibrary[myLibrary.length - 1].readBook;

    divCard.append(author, title, pages, readBook);

    cardContainer.append(divCard);

    myLibrary[myLibrary.length - 1]
  }
}
