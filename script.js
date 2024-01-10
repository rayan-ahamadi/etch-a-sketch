const grid = document.querySelector('#grid');
const resizeCursor = document.querySelector('#resize-cursor');
const cursorLabel = document.querySelector('#cursor-label');

function fillGrid(dimension){
    for(let i = 0; i < dimension; i++){
        let newDivRow = document.createElement('div');
        newDivRow.classList.add('grid-row');
        grid.appendChild(newDivRow);
        for(let j = 1; j < dimension; j++){
            let newDivColumn = document.createElement('div');
            newDivColumn.style['height'] = `${(grid.offsetHeight / dimension) - 2}px`;
            newDivColumn.classList.add('grid-cell');
            newDivRow.appendChild(newDivColumn);
        }
    }
}


resizeCursor.addEventListener('change', () => {
    while(grid.firstChild){
        grid.removeChild(grid.firstChild);
    }
    let value = resizeCursor.value;
    fillGrid(parseInt(value));
    cursorLabel.textContent = `${value}x${value}`;
});

fillGrid(16);