const myLibrary = [];

function Book(title, author, pages, readStatus) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.readStatus = readStatus;
}

function addBookToLibrary() {
  const title = document.querySelector('#title').value;
  const author = document.querySelector('#author').value;
  const pages = document.querySelector('#pages').value;

  let readStatus = 'Not read';

  if (document.getElementById('true').checked) {
    readStatus = 'Read';
  } else {
    readStatus = 'Not read';
  }

  const book = new Book(title, author, pages, readStatus);

  myLibrary.push(book);
}

const HarryPotter = new Book('Harry Potter', 'JK Rowling', '500', 'Read');
const Hobbit = new Book('Hobbit', 'Toliken', '295', 'Not read');
const ASIOF = new Book('A song of ice and fire', 'GRRM', '1095', 'Read');

myLibrary.push(Hobbit);
myLibrary.push(ASIOF);
myLibrary.push(HarryPotter);

Book.prototype.changeReadStatus = function () {
  if (this.readStatus === 'Read') {
    this.readStatus = 'Not read';
  } else {
    this.readStatus = 'Read';
  }
};

function createBookCard(book, index) {
  const pageContainer = document.querySelector('.container');

  const bookCardContainer = document.createElement('div');
  const bookTitle = document.createElement('h2');
  const bookAuthor = document.createElement('h3');
  const bookPages = document.createElement('p');
  const readStatus = document.createElement('p');
  const deleteButton = document.createElement('button');
  const changeReadStatusButton = document.createElement('button');

  deleteButton.addEventListener('click', () => {
    document.querySelector(`.a${index}`).remove();
    myLibrary.splice(index, 1);
  });

  changeReadStatusButton.addEventListener('click', () => {
    myLibrary[index].changeReadStatus();
    readStatus.textContent = book.readStatus;
  });

  bookCardContainer.classList.add(`${`a${index}`}`);

  bookTitle.textContent = book.title;
  bookAuthor.textContent = book.author;
  bookPages.textContent = book.pages;
  readStatus.textContent = book.readStatus;
  deleteButton.textContent = 'Delete';
  changeReadStatusButton.textContent = 'Change read status';

  bookCardContainer.appendChild(bookTitle);
  bookCardContainer.appendChild(bookAuthor);
  bookCardContainer.appendChild(bookPages);
  bookCardContainer.appendChild(readStatus);
  bookCardContainer.appendChild(deleteButton);
  bookCardContainer.appendChild(changeReadStatusButton);

  bookCardContainer.classList.add('info-card');

  pageContainer.appendChild(bookCardContainer);
}

function deleteBookCard(book, index) {
  if (document.querySelector(`.a${index}`) == null) {
    console.log("This book doesn't yet exist");
  } else {
    const bookClass = document.querySelector(`.a${index}`);
    bookClass.remove();
  }

  console.log(book);
  console.log(index);
}

function displayBooks() {
  myLibrary.forEach((book, index) => {
    deleteBookCard(book, index);
    createBookCard(book, index);
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
    addBookToLibrary();
    displayBooks();
    document.querySelector('.form-container').style.visibility = 'hidden';
  });
}

createSubmitButton();
