function addBook() {
    const username = document.querySelector("#username").value;
    const bookname = document.querySelector("#bookname").value;
    const booktype = document.querySelector('input[name="booktype"]:checked');

    if (username && bookname && booktype) {
        const newBook = {
            si: generateSI(),
            date: new Date().toLocaleDateString(),
            username, bookname, booktype: booktype.value
        };

        const books = JSON.parse(localStorage.getItem("books")) || [];
        books.push(newBook);
        localStorage.setItem("books", JSON.stringify(books));

        document.querySelector("form").reset();

        displayBooks();
    } else {
        alert("Please fill all fields.");
    }
}

function generateSI() {
    return (JSON.parse(localStorage.getItem('books')) || []).length + 1;
}

function displayBooks() {
    const books = JSON.parse(localStorage.getItem('books')) || [];
    const bookTable = document.getElementById('bookTable');
    bookTable.innerHTML = books.map(book => `
        <tr>
            <td>${book.si}</td>
            <td>${book.date}</td>
            <td>${book.username}</td>
            <td>${book.bookname}</td>
            <td>${book.booktype}</td>
        </tr>
    `).join('');
}

// Load the books when the page is loaded
window.onload = displayBooks;