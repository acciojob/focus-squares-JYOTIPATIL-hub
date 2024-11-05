//your JS code here. If required.
// Get all squares by their IDs
const square1 = document.getElementById("square1");
const square2 = document.getElementById("square2");
const square3 = document.getElementById("square3");

// Array of squares for easier manipulation
const squares = [square1, square2, square3];

// Function to handle hover events
function changeColorsOnHover(currentSquare) {
    squares.forEach(square => {
        if (square !== currentSquare) {
            square.style.backgroundColor = "#6F4E37"; // Coffee color
        }
    });
}

// Function to reset colors when hover ends
function resetColors() {
    squares.forEach(square => {
        square.style.backgroundColor = "#E6E6FA"; // Lavender color
    });
}

// Add event listeners for each square
squares.forEach(square => {
    square.addEventListener("mouseenter", () => changeColorsOnHover(square));
    square.addEventListener("mouseleave", resetColors);
});
