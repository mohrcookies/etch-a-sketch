const container = document.querySelector('#container');

let j = 16;
function createGrid() {
    for (let i = 1; i <= j; i++) {
        let divGrid = document.createElement('div');
        divGrid.classList.add(`div${i}`);
        container.appendChild(divGrid);
    }
}

createGrid();