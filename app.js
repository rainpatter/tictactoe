console.log('tictactoe')

let cells = document.querySelectorAll('.cell')

for (cell of cells) {
    cell.addEventListener('click', playerClick)
}

function playerClick(event) {
    let clickedCell = event.target
    clickedCell.classList.add('cross')
} 