//references
const container = document.querySelector('.container');
const userInput = document.querySelector('.user-input');

//function to create grid
function createDefaultGrid() {
    for (let i = 1; i <= 256; i++) {
        const divGrid = document.createElement('div');
        divGrid.classList.add('grid');
        divGrid.setAttribute('style', `height: ${600/16}px; width: ${600/16}px`);
        divGrid.addEventListener('mouseover', (event) => { 
            event.target.style.backgroundColor = "purple";
            });
        container.appendChild(divGrid);
    }
}
createDefaultGrid();

//function to remove grid     (while container.firstChild exists, remove it.)
function removeGrid() {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
}

//function for custom user size
function customGrid(size) {
    removeGrid();
    gridSize = size * size;
    for (let i = 1; i <= gridSize; i++) {
        const divGrid = document.createElement('div');
        divGrid.classList.add('grid');
        divGrid.setAttribute('style', `height: ${600/size}px; width: ${600/size}px`);
        divGrid.addEventListener('mouseover', (event) => { 
            event.target.style.backgroundColor = 'purple';
            });
        container.appendChild(divGrid);
    } 
}  


//button to prompt for new grid dimensions
function userInputPrompt() {
    const userSize = prompt('Pick a grid width between 1 and 100.');
    parseInt(userSize);
    if (userSize < 1 || userSize > 100 || isNaN(userSize)) {
        alert('Pick a number between 1 and 100');
        userInputPrompt();
    } else customGrid(userSize);
}

userInputBtn.addEventListener('click', userInputPrompt);





//function to clear image (doesn't allow redrawing yet)
// function clearImage() {
//     const pixels = document.querySelectorAll('.grid');
//     pixels.forEach((pixel) => pixel.setAttribute('style', 'backgroundColor: transparent'));
// }
// clearBtn.addEventListener('click', clearImage);
















