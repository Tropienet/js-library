const myLibrary = [];

function Book(title, author, pages, readStatus) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.readStatus = readStatus;
}

function addBookToLibrary() {
  const book = new Book(prompt(), prompt(), parseInt(prompt(), 10), prompt());

  myLibrary.push(book);
}

addBookToLibrary();
