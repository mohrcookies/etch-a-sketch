//references
const gridContainer = document.querySelector('.grid-container');
const userInputBtn = document.querySelector('.user-input-btn');
const clearBtn = document.querySelector('.clear-btn');
const randomColorBtn = document.querySelector('.random-color-btn');

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
        divGrid.style.height = `${600/size}px`;
        divGrid.style.width = `${600/size}px`;
        divGrid.style.opacity = 0.1;
        divGrid.addEventListener('mouseover', (event) => { 
            event.target.style.backgroundColor = getRandomColor();
            let colorOpacity = 0.1;
            event.target.style.opacity = colorOpacity += 0.1;
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
        divGrid.style.height = `${600/size}px`;
        divGrid.style.width = `${600/size}px`;
        divGrid.style.opacity = 0.1;
        divGrid.addEventListener('mouseover', (event) => { 
            event.target.style.backgroundColor = getRandomColor();
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


//random color generator
const hexCharacters = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
function getHexCharacter() {
    return hexCharacters[Math.floor(Math.random() * 16)];
}

function getRandomColor() {
    let hexColor = '#';
    for (let i = 0; i < 6; i++) {
        hexColor += getHexCharacter();
    }
    return hexColor;
}



//function to clear image (doesn't allow redrawing yet)
// function clearImage() {
//     const pixels = document.querySelectorAll('.grid');
//     pixels.forEach((pixel) => pixel.setAttribute('style', 'backgroundColor: transparent'));
// }
// clearBtn.addEventListener('click', clearImage);
















