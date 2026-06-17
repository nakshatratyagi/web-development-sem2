let books = [];

function addBook() {
    let title = document.getElementById("title").value;
    let author = document.getElementById("author").value;

    if(title === "" || author === "") return;

    books.push({ title, author });
    displayBooks();

    document.getElementById("title").value = "";
    document.getElementById("author").value = "";
}

function displayBooks() {
    let list = document.getElementById("bookList");
    list.innerHTML = "";

    books.forEach((book,index)=>{
        list.innerHTML += `
        <tr>
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>
                <button onclick="editBook(${index})">Edit</button>
                <button onclick="deleteBook(${index})">Delete</button>
            </td>
        </tr>`;
    });
}

function editBook(index){
    let newTitle = prompt("Enter new title", books[index].title);
    let newAuthor = prompt("Enter new author", books[index].author);

    books[index].title = newTitle;
    books[index].author = newAuthor;

    displayBooks();
}

function deleteBook(index){
    books.splice(index,1);
    displayBooks();
}
