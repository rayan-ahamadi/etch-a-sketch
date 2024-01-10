const grid = document.querySelector('#grid');
const resizeCursor = document.querySelector('#resize-cursor');
const cursorLabel = document.querySelector('#cursor-label');
const clearButton = document.querySelector('#clear');
const colorPicker = document.querySelector('#choose-color');
const rainbowMode = document.querySelector("#rainbow")

function fillGrid(dimension){
    for(let i = 0; i < dimension; i++){
        let newDivRow = document.createElement('div');
        newDivRow.classList.add('grid-row');
        grid.appendChild(newDivRow);
        for(let j = 1; j < dimension; j++){
            let newDivColumn = document.createElement('div');
            newDivColumn.style['border'] = '0.1px solid black';
            newDivColumn.style['height'] = `${(grid.offsetHeight / dimension) - 2}px`;
            newDivColumn.classList.add('grid-cell');
            newDivRow.appendChild(newDivColumn);
            grid.addEventListener('mousedown', () => {
                if(!rainbowMode.checked){
                   newDivColumn.myParam = colorPicker.value; 
                }else {
                    newDivColumn.myParam = randomColor(); 
                }
    
                newDivColumn.addEventListener('mouseover', changeColor); 
            });
            grid.addEventListener('mouseup', () => {
                // Remove the event listener
                newDivColumn.removeEventListener('mouseover', changeColor);

            });
        }
    }
}

function changeColor(e){
    if(e.target.classList.contains('grid-cell')){
        e.target.style['background-color'] = e.currentTarget.myParam;
    }
}

function randomColor(){
    let red,green,blue;
    red = Math.floor(Math.random() * 256);
    green = Math.floor(Math.random() * 256);
    blue = Math.floor(Math.random() * 256);
    return `rgb(${red} ${green} ${blue})`
}

clearButton.addEventListener('click', () => {
    let cells = document.querySelectorAll('.grid-cell');
    cells.forEach(cell => {
        cell.style['background-color'] = 'cadetblue';
    });
})


resizeCursor.addEventListener('change', () => {
    grid.innerHTML = '';
    let value = resizeCursor.value;
    fillGrid(parseInt(value));
    cursorLabel.textContent = `${value}x${value}`;
});

fillGrid(16);