//references
const container = document.querySelector('.container');
const userInput = document.querySelector('.user-input');

//function to create grid
createDefaultGrid(16);
function createDefaultGrid() {
    for (let i = 1; i <= 256; i++) {
        let divGrid = document.createElement('div');
        divGrid.classList.add('grid');
        divGrid.setAttribute('style', `height: ${600/16}px; width: ${600/16}px`);
        divGrid.addEventListener('mouseover', (event) => { 
            event.target.style.backgroundColor = "purple";
            });
        container.appendChild(divGrid);
    }
}

//function for custom user size
function customGrid(size) {
    gridSize = size * size;
    for (let i = 1; i <= gridSize; i++) {
        let divGrid = document.createElement('div');
        divGrid.classList.add('grid');
        divGrid.setAttribute('style', `height: ${600/size}px; width: ${600/size}px`);
        divGrid.addEventListener('mouseover', (event) => { 
            event.target.style.backgroundColor = "purple";
            });
        container.appendChild(divGrid);
    }
}


//button to prompt for new grid dimensions
let userSize;
userInput.addEventListener('click', () => {
    userSize = prompt('Pick a grid width between 1 and 100.');
    parseInt(userSize);
    customGrid(userSize);
})








//alternative function for custom user size
// function customGrid(size) {
//     gridSize = size * size;
//     for (let i = 1; i <= gridSize; i++) {
//         let divGrid = document.createElement('div');
//         divGrid.classList.add('grid');
//         divGrid.setAttribute('style', `height: ${600/size}px; width: ${600/size}px`);
//         container.appendChild(divGrid);
//     }
// }
//hover effect
// const grid = document.querySelectorAll('.grid');
// grid.forEach((square) => {
//     square.addEventListener('mouseover', (event) => { 
//     event.target.style.backgroundColor = "purple";
//     });
// });










