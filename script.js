const myLibrary = [];
const content = document.querySelector('.content');
const dialog = document.querySelector('dialog');
const showButton = document.querySelector('dialog + button');
const closeButton = document.querySelector('dialog button');
const submitButton = document.getElementById('submit');
// populateContent();
showButton.addEventListener('click', () => {
    dialog.showModal();
});
closeButton.addEventListener('click', () => {
    dialog.close();
});
submitButton.addEventListener('click', (event) => {
    addToLibrary(getValues());
    event.preventDefault();
    // populateContent();
});

function Book(title, author, genre, pages, read){
    // constructor
    this.title = title;
    this.author = author;
    this.genre = genre;
    this.pages = pages;
    this.read = read;
}

function addToLibrary(values){
    // let bookOne = new Book('Krig pa stjarna bror', 'Hampus Farner', 'Sci-Fi', 137, true);
    // let bookTwo = new Book('Blablabla', 'Marica Jakobsson', 'Self help', 12532, false);
    const newBook = new Book(values[0],
        values[1], values[2], values[3], values[4]);
    myLibrary.push(newBook);
    updateContent(newBook);
}

// function to update content
function updateContent(book){
    const div = document.createElement('div');
    div.classList.add('book');
    content.appendChild(div);
    Object.keys(book).forEach(key => {
        const bookDiv = document.createElement('div');
        bookDiv.classList.add(key);
        bookDiv.innerText = book[key];
        div.appendChild(bookDiv);
    })
}

// // function to add some initial books
function populateContent(){
    const div = document.createElement('div');
    div.classList.add('book');
    content.appendChild(div);
    myLibrary.forEach(book => {
        Object.keys(book).forEach(key => {
            const bookDiv = document.createElement("div");
            bookDiv.classList.add(key);
            bookDiv.innerText = book[key];
            div.appendChild(bookDiv);
        })
    })
}
//
// make the read or not be a checkbox instead
// and make a button beside the book to remove it from the list
//

function getValues(){
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const genre = document.getElementById('genre').value;
    const pages = document.getElementById('pages').value;
    const read = document.getElementById('read');
    if (read.checked){
        return [title, author, genre, pages, true];
    } else {
        return [title, author, genre, pages, false];
    }
}

