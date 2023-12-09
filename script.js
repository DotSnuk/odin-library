const myLibrary = [];
const content = document.querySelector('.content');
const dialog = document.querySelector('dialog');
const showButton = document.querySelector('dialog + button');
const closeButton = document.querySelector('dialog button');
const submitButton = document.getElementById('submit');
const logButton = document.getElementById('log');
initialBooks();
showButton.addEventListener('click', () => {
    dialog.showModal();
});
closeButton.addEventListener('click', () => {
    dialog.close();
});
submitButton.addEventListener('click', (event) => {
    addToLibrary(getValues());
    event.preventDefault();
});
logButton.addEventListener('click', () => {
    console.log(myLibrary);
})

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

// adding some initial books to library
function initialBooks(){
    addToLibrary(['Krig på stjärna bror', 'Hampus Farner', 'Sci-Fi', 137, true]);
    addToLibrary(['Blablabla', 'Marica Jakobsson', 'Self help', 12532, false]);
    addToLibrary(['The Wither', 'Some polish guy', 'Fantasy', 327, true]);
}

function updateContent(book){
    const div = document.createElement('div');
    div.classList.add('book');
    content.appendChild(div);
    Object.keys(book).forEach(key => {
        if (key === 'read'){
            const checkbox = document.createElement('input');
            checkbox.setAttribute('type', 'checkbox');
            checkbox.classList.add(key);
            if (book[key]){
                checkbox.checked = true;
            } else {
                checkbox.checked = false;
            }
            checkbox.addEventListener('click', () => {
                updateRead(book);
            })
            div.appendChild(checkbox);
        } else {
            const bookDiv = document.createElement('div');
            bookDiv.classList.add(key);
            bookDiv.innerText = book[key];
            div.appendChild(bookDiv);
        }
    });
    const delButton = document.createElement('button');
    delButton.classList.add('delete');
    delButton.innerText = 'Remove';
    div.appendChild(delButton);
    delButton.addEventListener('click', () => {
        deleteBook(book);
    });
    // console.log(myLibrary);
}

function updateRead(book){
    // does this work to invert?
    book.read = !book.read;
}

function deleteBook(book){
    // removes book from mylibrary array
    // then removes the bookdivs and repopulates the content with new updated array
    myLibrary.splice(myLibrary.indexOf(book), 1);
    const content = document.querySelector('.content');
    const bookDiv = document.querySelectorAll('.book');
    bookDiv.forEach(book => {
        content.removeChild(book);
    });
    myLibrary.forEach(book => {
        updateContent(book);
    });
}

// // function to populate after book deleted
// function populateContent(){
//     const div = document.createElement('div');
//     div.classList.add('book');
//     content.appendChild(div);
//     myLibrary.forEach(book => {
//         Object.keys(book).forEach(key => {
//             const bookDiv = document.createElement("div");
//             bookDiv.classList.add(key);
//             bookDiv.innerText = book[key];
//             div.appendChild(bookDiv);
//         })
//     })
// }

// make the read or not be a checkbox instead

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

