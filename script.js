//your JS code here. If required.
// script.js
const submitButton = document.getElementById("submit");
const bookList = document.getElementById("book-list");

submitButton.addEventListener("click", addBook);

function addBook() {
    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const isbn = document.getElementById("isbn").value;

    // Create a new row
    const newRow = document.createElement("tr");
    newRow.innerHTML = `
        <td>${title}</td>
        <td>${author}</td>
        <td>${isbn}</td>
        <td><button class="delete">Clear</button></td>
    `;

    // Add delete functionality
    const deleteButton = newRow.querySelector(".delete");
    deleteButton.addEventListener("click", () => {
        newRow.remove();
    });

    // Append the row to the table
    bookList.appendChild(newRow);

    // Clear input fields
    document.getElementById("title").value = "";
    document.getElementById("author").value = "";
    document.getElementById("isbn").value = "";
}
