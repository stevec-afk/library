let library = [
    {
        title: "The Lord of the Rings",
        author: "J.R.R. Tolkein",
        pages: 1216,
        status: "read"
    }
];

class Book {
    constructor(author, title, pages, read){
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }
}

const $title = document.querySelector("#title");
const $author = document.querySelector("#author");
const $pages = document.querySelector("#pages");
const $status = document.querySelector("#status"); 
const $form = document.querySelector("form");
const $table = document.querySelector("table");
const $tableBody = document.querySelector("#tableBody");
//const $readButton = document.querySelector("");

$form.addEventListener("submit", (e)  => {
    e.preventDefault();
    addBook();
    updateTable();
    clearForm();
});

function addBook() {
    const newBook = new Book($title.value, $author.value, $pages.value, $status.value);
    library.push(newBook);
}

function deleteBook(currentBook) {
    library.splice(currentBook, currentBook + 1)
}

function changeStatus(book) {
    if (library[book].status === "read") {
        library[book].status = "not read";
    } 
    else library[book].status = "read";
}

function updateTable() {
    $tableBody.innerHTML = "";
    library.forEach((book) => {
        // this is not safe - needs to be refactored using appendChild
        const htmlBook = `
        <tr>
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.pages}</td>
            <td>
                <button class="readButton">${book.status}</button>
            </td>
            <td class="actionButtons">
                <button hidden class="editButton"><img src="assets/edit-icon.svg"></button>
                <button class="deleteButton"><img src="assets/delete-icon.svg"></button>
            </td>
        </tr>
        `;
        $tableBody.insertAdjacentHTML("afterbegin", htmlBook);
    });
}

function clearForm() {
    $title.value = "";
    $author.value = "";
    $pages.value = "";    
}