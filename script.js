const myLibrary = [];
const content = document.querySelector('.content');
addToLibrary();
populateContent();

function Book(title, author, genre, pages, read){
    // constructor
    this.title = title;
    this.author = author;
    this.genre = genre;
    this.pages = pages;
    this.read = read;
}

function addToLibrary(){
    let bookOne = new Book('Krig pa stjarna bror', 'Hampus Farner', 'Sci-Fi', 137, true);
    let bookTwo = new Book('Blablabla', 'Marica Jakobsson', 'Self help', 12532, false)
    myLibrary.push(bookOne);
    myLibrary.push(bookTwo);
    console.log(myLibrary);
}

function populateContent(){
    const div = document.createElement('div');
    div.classList.add('book');
    content.appendChild(div);
    myLibrary.forEach(book => {
        Object.keys(book).forEach(key => {
            console.log(key);
            const bookDiv = document.createElement("div");
            bookDiv.classList.add(key);
            bookDiv.innerText = book[key];
            div.appendChild(bookDiv);
        })
    })
}