/* ### Creating a 2 dimensional array ###
for(let i = 0; i < 3;i++){
    board[i] = []
    for(let j = 0; j < 3 ; j++){
        board[i][j] = "";
    }
} */

/*START*/

let board = ['','','','','','','','',''];
const gridBoard = document.querySelector('.board-container');
const winnerText = document.getElementById('winner-announce');
const resetBtn =  document.querySelector('.reset-game');
const getFirstPlayer = document.querySelector('input[name="player"]:checked').value;
let currentPlayer;


const human = "X";
const ai = "O";

currentPlayer = getFirstPlayer;


const winCombinations = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

gridBoard.addEventListener('click', playHumanRound );
resetBtn.addEventListener('click', resetGame);

function playGame(){
    if(currentPlayer == ai){
        playAIRound();
    }
}

function renderMarker(id, marker){
    document.getElementById(id).textContent = marker;
}

function addToBoard(cell, player){
    board[cell] = player;
}

function resetGame(){
    clearCells();
    board = ['','','','','','','','',''];
    gridBoard.classList.remove('no-click');
    winnerText.textContent = '';
    currentPlayer = getFirstPlayer;
}

function clearCells(){
    for(let i = 0; i < 9; i++ ){
        document.getElementById(i).textContent = '';
    }
}

function checkWin(){

    emptyCells = board.filter((el) => el != "")
    console.log(emptyCells.length);

    winCombinations.forEach(comb => {
        if(board[comb[0]] === human && board[comb[1]] === human && board[comb[2]] === human){
            gameWon(human);
            return;
        }else if(board[comb[0]] === ai && board[comb[1]] === ai && board[comb[2]] === ai){
            gameWon(ai)
            return;
        }

    })
    if(emptyCells.length == 9){
        gameWon("Tie")
        return;
    }

    console.log(board);

}

function gameWon(player){

        console.log(player);

        if(player == "Tie"){
            winnerText.textContent = "Tie!"
        }else {
            winnerText.textContent = `Winner is ${player}!`;
        }
        
        gridBoard.classList.add('no-click');
      
        /* board = []; */
    }

function playHumanRound(e){

    let cell = e.target.id;

        if(board[cell] != '')return;
            renderMarker(cell, human);
            addToBoard(cell, human);
            checkWin();
            
            currentPlayer = ai;

            playGame();

}

function playAIRound(){

    for (let i = 0; i < board.length; i++) {
        if(board[i] == ''){
            const cell = i;
            renderMarker(cell, ai);
            addToBoard(cell, ai);
            checkWin();
            return;
        }
        
    }

    

    currentPlayer = human;
    
}





playGame();

console.log(board);
