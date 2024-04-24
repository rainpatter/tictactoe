console.log('tictactoe')

// vars
const cells = document.querySelectorAll('.cell')
const playerDisplay = document.querySelector('.player')
const resetBtn = document.querySelector('.reset')
const gameRoundDisplay = document.querySelector('.round')
const playerOneScore = document.querySelector('.player-1-score')
const playerTwoScore = document.querySelector('.player-2-score')

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
let win = 0
let draw = 0
let gameRound = 1
let player1Score = 0
let player2Score = 0

// set up event handlers
for (cell of cells) {
    cell.addEventListener('click', playerClick)
}

gameRoundDisplay.textContent = gameRound
playerOneScore = player1Score
playerTwoScore = player2Score


function playerClick(event) {
    let clickedCell = event.target
    noughtOrCross(clickedCell)
    checkWin(cells)
    console.log(win)
    checkDraw(cells)
    console.log(draw)
    reset()
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
    let checkArray = []
    let cellContents = null
    if (playerOne === 'O') {
        cellContents = 'cross'
    } else {
        cellContents = 'nought'
    }
    console.log(cellContents)
    for (cell of cellArray) {
        if (cell.classList.contains(cellContents)) {
            toNumber = Number(cell.classList[1])
            checkArray.push(toNumber)
        }
    }
    console.log(checkArray)
    for (condition of winningConditions) {
        if (condition.every(item => checkArray.includes(item))) {
            console.log('you won!')
            win = 1
            if (cellContents == 'cross') {
                player1Score += 1
                playerOneScore.textContent = player1Score
            } else {
                player2Score += 1
                playerTwoScore.textContent = player2Score
            }
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
        draw = 1
    }
}

function reset() {
    if (win === 1 | draw === 1) {
        resetBtn.style.visibility = "visible"
        console.log('lets play again')
        resetBtn.addEventListener('click', reinitialiseBoard)
    }
}


function reinitialiseBoard() {
    console.log('you reset')
    for (cell of cells) {
        cell.classList.remove('cross')
        cell.classList.remove('nought')
    }
    playerOne = 'X'
    playerDisplay.textContent = "Player 1" 
    resetBtn.style.visibility = "hidden"  
    win = 0
    draw = 0
    gameRound += 1
    gameRoundDisplay.textContent = gameRound
}
// node list 
// 