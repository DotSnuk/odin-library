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
    let bookOne = new Book('The stuff', 'Hampus Farner', 'Sci-Fi', 137, true);
    myLibrary.push(bookOne);
    console.log(myLibrary);
}

function populateContent(){
    const div = document.createElement('div');
    div.classList.add('book');
    content.appendChild(div);
    myLibrary.forEach(book => {
        // console.log(Object.keys(book));
        Object.keys(book).forEach(key => {
            console.log(key);
            const bookDiv = document.createElement("div");
            bookDiv.classList.add(key);
            bookDiv.innerText = book[key];
            div.appendChild(bookDiv);
        })
        // const bookDiv = document.createElement("div");
        // bookDiv.classList.add(Object.keys(book));
        // div.appendChild(bookDiv);
    })
}