console.log('tictactoe')

// vars
const cells = document.querySelectorAll('.cell')
const playerDisplay = document.querySelector('.player')

// initial game conditions
const winningConditions = [
    // horizontals
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    // verticals
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    // diagonals
    [1, 5, 9],
    [3, 5, 7]

]
let playerOne = 'X'

// set up event handlers
for (cell of cells) {
    cell.addEventListener('click', playerClick)
}


function playerClick(event) {
    let clickedCell = event.target
    noughtOrCross(clickedCell)
    checkWin(cells)
    checkDraw(cells)
} 




function noughtOrCross(cell) {
    if (playerOne == 'X') {
        console.log('player one')
        if (!cell.classList.contains('nought')) {   
            cell.classList.add('cross')}
            playerOne = 'O'
            playerDisplay.textContent = "Player 2"

    } else {
        console.log('player two')
        if (!cell.classList.contains('cross')) {   
            cell.classList.add('nought')}
            playerOne = 'X'
            playerDisplay.textContent = "Player 1"
    }
}



function checkWin(cellArray) {
    checkArray = []
    for (cell of cellArray) {
        if (cell.classList.contains('cross')) {
            toNumber = Number(cell.classList[1])
            checkArray.push(toNumber)
        }
    }
    console.log(checkArray)
    for (condition of winningConditions) {
        if (condition.every(item => checkArray.includes(item))) {
            console.log('you won!')
        }
    }
}

function checkDraw(cellArray) {
    cellUsed = []
    for (cell of cellArray) {
        if (cell.classList.contains('cross') | cell.classList.contains('nought')) {
            cellUsed.push(true)
        }
    }
    console.log(cellUsed)
    if (cellUsed.length === 9) {
        console.log('draw')
    }
}


// node list 
// 