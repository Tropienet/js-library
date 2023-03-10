const myLibrary = [];

function Book(title, author, pages, readStatus) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.readStatus = readStatus;
}

function addBookToLibrary() {
//  const book = new Book(prompt(), prompt(), parseInt(prompt(), 10), prompt());
  console.log('hello World');
  // myLibrary.push(book);
}

addBookToLibrary();

const HarryPotter = new Book('Harry Potter', 'JK Rowling', '500', 'Read');
const Hobbit = new Book('Hobbit', 'Toliken', '295', 'Not read');
const ASIOF = new Book('A song of ice and fire', 'GRRM', '1095', 'read');

myLibrary.push(Hobbit);
myLibrary.push(ASIOF);
myLibrary.push(HarryPotter);

function createBookCard(book) {
  const pageContainer = document.querySelector('.container');

  const bookCardContainer = document.createElement('div');
  const bookTitle = document.createElement('h2');
  const bookAuthor = document.createElement('h3');
  const bookPages = document.createElement('p');
  const readStatus = document.createElement('p');

  bookTitle.textContent = book.title;
  bookAuthor.textContent = book.author;
  bookPages.textContent = book.pages;
  readStatus.textContent = book.readStatus;

  bookCardContainer.appendChild(bookTitle);
  bookCardContainer.appendChild(bookAuthor);
  bookCardContainer.appendChild(bookPages);
  bookCardContainer.appendChild(readStatus);

  bookCardContainer.classList.add('info-card');

  pageContainer.appendChild(bookCardContainer);
}

function displayBooks() {
  myLibrary.forEach((book) => {
    createBookCard(book);
  });
}

displayBooks();

function createNewBookButton() {
  const newBookButton = document.querySelector('.new-book-button');

  newBookButton.addEventListener('click', () => {
    document.querySelector('.form-container').style.visibility = 'visible';
  });
}

createNewBookButton();

function createSubmitButton() {
  const submitButton = document.querySelector('#submit-btn');

  submitButton.addEventListener('click', () => {
    document.querySelector('.form-container').style.visibility = 'hidden';
  });
}

createSubmitButton();
