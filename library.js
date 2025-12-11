let library;

const defaultData = [
    {
        title: "The Lord of the Rings",
        author: "J.R.R. Tolkein",
        pages: 1216,
        read: true
    }
];

const $title = document.querySelector("title");
const $author = document.querySelector("author");
const $pages = document.querySelector("pages");
const $status = document.querySelector("status");
const $form = document.querySelector("form");
const $table = document.querySelector("table");
const $tableBody = document.querySelector("#tableBody")

$form.addEventListener("submit", (e)  => {
    e.preventDefault();
    addBook();
    updateTable();
    clearForm();
});

class Book {
    constructor(author, title, pages, read){
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }
}

function addBook() {
    const newBook = new Book($name.value, $author.value, $pages.value, $status.value);
    library.push(newBook);
    updateLocalStorage();
}

function updateTable() {
    checkLocalStorage();
    $tableBody.innerHTML = "";
    
}

function clearForm() {
    return;
}

function updateLocalStorage() {
    localStorage.setItem("library", JSON.stringify(library));
}

function checkLocalStorage() {
    return;
}