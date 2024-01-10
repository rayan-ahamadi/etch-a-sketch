const grid = document.querySelector('#grid');

function fillGrid(dimension){
    while(grid.firstChild){
        grid.removeChild(grid.firstChild);
    }
    for(let i = 1; i < dimension; i++){
        let newDivRow = document.createElement('div');
        newDivRow.classList.add('grid-row');
        grid.appendChild(newDivRow);
        for(let j = 1; j < dimension; j++){
            let newDivColumn = document.createElement('div');
            newDivColumn.classList.add('grid-cell');
            newDivColumn.style['border'] = '1px solid black';
            newDivColumn.style['height'] = `${(grid.offsetHeight / dimension) - 2}px`;
            newDivRow.appendChild(newDivColumn);
        }
    }
}

fillGrid(16);