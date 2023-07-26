
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

Book.prototype.changeReadStatus = function() {
  if (this.readBook === "read") {
    this.readBook = "not read";

    cardContainer.childNodes.forEach(div => {
      if (+(div.dataset.index) === +(myLibrary.indexOf(this))) {
        div.querySelector(".read-status-p").textContent = `readBook: not read`;
      }
    });

  }else{(this.readBook === "not read") 
    this.readBook = "read";

    cardContainer.childNodes.forEach(div => {
      if (+(div.dataset.index) === +(myLibrary.indexOf(this))) {
        div.querySelector(".read-status-p").textContent = `readBook: read`;
      }
    });

  }
}

// GENERIC PREDEFINED BOOKS
let book1 = new Book("The Rational Male", "Rollo Tomassi", 300, "read");

myLibrary.push(book1);

// FUNCTION THAT ADDS BOOKS TO LIBRARY ARRAY
function addBookToLibrary() {
  libContainer.classList.remove("blur-class");

  let author = document.getElementById("author-name").value;
  let title = document.getElementById("book-title").value;
  let pages = document.getElementById("book-pages").value;
  let checked = document.querySelector("input[name = 'read-book']:checked").value;
  let myBook = new Book(title, author, pages, checked);
  myLibrary.push(myBook);

  let inputs = document.querySelectorAll(".input-1");
  inputs.forEach(i => i.value = "");
  document.getElementById("read-option").checked = false;
  document.getElementById("not-read").checked = false;

  formField.style.display = "none";
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
      divCard.classList.add("book-card");

      divCard.dataset.index = myLibrary.indexOf(obj);

      
      let author = document.createElement("p");
      author.classList.add("book-card-p");
      author.textContent = "author: " + obj.author;
  
      let title = document.createElement("p");
      title.classList.add("book-card-p");
      title.textContent = "title: " + obj.title;
  
      let pages = document.createElement("p");
      pages.classList.add("book-card-p");
      pages.textContent = "pages: " + obj.pages;
  
      let readBook = document.createElement("p");
      readBook.textContent = "readBook: " + obj.readBook;
      readBook.classList.add("read-status-p");

      let removeBtn = document.createElement("button");
      removeBtn.textContent = "Delete";
      removeBtn.classList.add("delete-btn");
      removeBtn.addEventListener("click", () => {
        let removed = myLibrary.splice(divCard.dataset.index, 1);
        
        if (divCard.textContent.includes(removed[0].title)) {
          cardContainer.removeChild(divCard);
        }
        cardContainer.childNodes.forEach(div => {
          myLibrary.forEach(obj => {
            if (div.textContent.includes(obj.title))
              div.dataset.index = myLibrary.indexOf(obj);
          })
        })

      });

      let readToggle = document.createElement("button");
      readToggle.textContent = "Read Status";
      readToggle.classList.add("read-status-btn");
      readToggle.addEventListener("click", () => {
        obj.changeReadStatus();
      })

      let parentBtnDiv = document.createElement("div");
      parentBtnDiv.classList.add("parent-btn-div");
      parentBtnDiv.append(removeBtn, readToggle);


      divCard.append(author, title, pages, readBook, parentBtnDiv);

  
      cardContainer.append(divCard);
    });
  } else {
    let divCard = document.createElement("div");
    divCard.classList.add("book-card");

    divCard.dataset.index = myLibrary.length - 1;

    let author = document.createElement("p");
    author.classList.add("book-card-p");
    author.textContent = "author: " + myLibrary[myLibrary.length - 1].author;

    let title = document.createElement("p");
    title.classList.add("book-card-p");
    title.textContent = "title: " + myLibrary[myLibrary.length - 1].title;

    let pages = document.createElement("p");
    pages.classList.add("book-card-p");
    pages.textContent = "pages: " + myLibrary[myLibrary.length - 1].pages;

    let readBook = document.createElement("p");
    readBook.textContent = "readBook: " + myLibrary[myLibrary.length - 1].readBook;
    readBook.classList.add("read-status-p");

    let removeBtn = document.createElement("button");
    removeBtn.textContent = "Delete";
    removeBtn.classList.add("delete-btn");
    removeBtn.addEventListener("click", () => {
      let removed = myLibrary.splice(divCard.dataset.index, 1);
      if (divCard.textContent.includes(removed[0].title)) {
        cardContainer.removeChild(divCard);
      }

      cardContainer.childNodes.forEach(div => {
        myLibrary.forEach(obj => {
          if (div.textContent.includes(obj.title))
            div.dataset.index = myLibrary.indexOf(obj);
        })
      })
    });

    let readToggle = document.createElement("button");
    readToggle.textContent = "Read Status";
    readToggle.classList.add("read-status-btn");
    readToggle.addEventListener("click", () => {
    myLibrary[divCard.dataset.index].changeReadStatus();
    });

    let parentBtnDiv = document.createElement("div");
    parentBtnDiv.classList.add("parent-btn-div");
    parentBtnDiv.append(removeBtn, readToggle);

    divCard.append(author, title, pages, readBook, parentBtnDiv);

    cardContainer.append(divCard);

  }
}

displayBooks();