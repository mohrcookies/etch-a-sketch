const container = document.querySelector('.container');

//function to create grid
function createGrid() {
    for (let i = 1; i <= 1000; i++) {
        let divGrid = document.createElement('div');
        divGrid.classList.add('grid');
        container.appendChild(divGrid);
    }
}

//this calls the function and actually creates the grid
// createGrid();


//function for custom user size
function customSize(size) {
    gridSize = size * size;
    for (let i = 1; i <= gridSize; i++) {
        let divGrid = document.createElement('div');
        divGrid.classList.add('grid');
        divGrid.setAttribute('style', `height: ${600/size}px; width: ${600/size}px`);
        container.appendChild(divGrid);
    }
}

customSize(16);