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
  const bookTitle = document.createElement('h1');
  const bookAuthor = document.createElement('h2');
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

  pageContainer.appendChild(bookCardContainer);
}

function displayBooks() {
  myLibrary.forEach((book) => {
    createBookCard(book);
  });
}

displayBooks();
