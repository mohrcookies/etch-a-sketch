//references
const gridContainer = document.querySelector('.grid-container');
const userInputBtn = document.querySelector('.user-input-btn');
const clearBtn = document.querySelector('.clear-btn');

//function to remove grid     (while gridContainer.firstChild exists, remove it.)
function removeGrid() {
    while (gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.firstChild);
    }
}

//function to create grid
function createDefaultGrid() {
    for (let i = 1; i <= 256; i++) {
        const divGrid = document.createElement('div');
        divGrid.classList.add('grid');
        divGrid.setAttribute('style', `height: ${600/16}px; width: ${600/16}px`);
        divGrid.addEventListener('mouseover', (event) => { 
            event.target.style.backgroundColor = "purple";
            });
        gridContainer.appendChild(divGrid);
    }
}
createDefaultGrid();


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
        gridContainer.appendChild(divGrid);
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
















