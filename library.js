let library = [
    {
        title: "The Lord of the Rings",
        author: "J.R.R. Tolkein",
        pages: 1216,
        status: "read"
    },
    {
        title: "Book2",
        author: "Author2",
        pages: 1212,
        status: "unread"
    },
    {
        title: "Book3",
        author: "Author3",
        pages: 1213,
        status: "read"
    },
    {
        title: "Book4",
        author: "Author4",
        pages: 1214,
        status: "unread"
    }
];

class Book {
    constructor(title, author, pages, status){
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.status = status;
    }
}

const $title = document.querySelector("#title");
const $author = document.querySelector("#author");
const $pages = document.querySelector("#pages");
const $status = document.querySelector("#status"); 
const $form = document.querySelector("form");
const $table = document.querySelector("table");
const $tableBody = document.querySelector("#tableBody");

$form.addEventListener("submit", (e)  => {
    e.preventDefault();
    addBook();
    updateTable();
    clearForm();
});

// Click handler for delete and read status buttons
$table.addEventListener("click", (e) => {
    const currentBook = e.target.closest("tr").firstElementChild;
    if (e.target.classList.contains("deleteButton")) {
        library.splice(findBook(library, currentBook.innerText),1);
    }
    if (e.target.classList.contains("readButton")) {
        changeStatus(findBook(library, currentBook.innerText));
    }
    updateTable();
});

function addBook() {
    const newBook = new Book($title.value, $author.value, $pages.value, $status.value);
    library.push(newBook);
}

function deleteBook(currentBook) {
    library.splice(currentBook, 1)
}

function changeStatus(book) {
    if (library[book].status === "read") {
        library[book].status = "not read";
    } 
    else library[book].status = "read";
}

function findBook(libraryArray, title) {
    if (libraryArray.length === 0 || libraryArray === null) {
        return;
    }
    for (book of libraryArray) {
        if (book.title === title) {
            return libraryArray.indexOf(book);
        }
    }
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
    $status.value = "read";
}

updateTable();