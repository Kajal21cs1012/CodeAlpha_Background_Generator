// Get the button and color code elements by their IDs
const button = document.getElementById('change-bg');
const colorCode = document.getElementById('color-code');

// Function to generate a random background color
function generateRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Function to update the color code display
function updateColorCode(color) {
    colorCode.textContent = `Color Code: ${color}`;
}

// Event listener for button click
button.addEventListener('click', function () {
    // Generate a random background color
    const randomColor = generateRandomColor();

    // Set the background color of the body
    document.body.style.backgroundColor = randomColor;

    // Update the color code display
    updateColorCode(randomColor);
});
