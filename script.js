const container = document.getElementById('container');

// Create the initial grid
createGrid(16);

// Function to create the grid
function createGrid(size) {
  // Clear the existing grid
  clearGrid();

  // Calculate the width of each square based on the container width and grid size
  const squareWidth = container.clientWidth / size;

  // Create the squares
  for (let i = 0; i < size * size; i++) {
    const square = document.createElement('div');
    square.classList.add('square');
    square.style.width = `${squareWidth}px`;
    square.style.height = `${squareWidth}px`;

    // Add hover effect
    square.addEventListener('mouseover', () => {
      square.style.background = getRandomColor();
    });

    container.appendChild(square);
  }
}

// Function to clear the grid
function clearGrid() {
  while (container.firstChild) {
    container.firstChild.remove();
  }
}

// Function to generate a random color
function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// Button click event listener
const button = document.getElementById('new-grid-button');
button.addEventListener('click', () => {
  const gridSize = prompt('Enter the number of squares per side (maximum 100):');
  const size = parseInt(gridSize);
  if (isNaN(size) || size <= 0 || size > 100) {
    alert('Invalid input. Please enter a number between 1 and 100.');
    return;
  }
  createGrid(size);
});