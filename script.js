// Element References
const popupOverlay = document.querySelector(".popup-overlay");
const popupBox = document.querySelector(".popup-box");
const openPopupButton = document.getElementById("open-popup");
const cancelPopupButton = document.getElementById("cancel-popup");
const bookForm = document.getElementById("book-form");
const bookTitleInput = document.getElementById("book-title");
const bookAuthorInput = document.getElementById("book-author");
const bookDescriptionInput = document.getElementById("book-description");
const container = document.querySelector(".container");

// Open Popup
openPopupButton.addEventListener("click", () => {
    popupOverlay.style.display = "block";
    popupBox.style.display = "block";
});

// Close Popup
cancelPopupButton.addEventListener("click", () => {
    closePopup();
});

function closePopup() {
    popupOverlay.style.display = "none";
    popupBox.style.display = "none";
    bookForm.reset();
}

// Add Book
bookForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const bookContainer = document.createElement("div");
    bookContainer.classList.add("book-container");

    bookContainer.innerHTML = `
        <h2>${bookTitleInput.value}</h2>
        <h5>${bookAuthorInput.value}</h5>
        <p>${bookDescriptionInput.value}</p>
        <button class="delete-button">Delete</button>
    `;

    // Add delete functionality to new book
    bookContainer.querySelector(".delete-button").addEventListener("click", () => {
        bookContainer.remove();
    });

    container.appendChild(bookContainer);
    closePopup();
});

// Add delete functionality to existing books
document.querySelectorAll(".delete-button").forEach((button) => {
    button.addEventListener("click", (event) => {
        event.target.parentElement.remove();
    });
});
