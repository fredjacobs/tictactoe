

let board = ['','','','','','','','',''];
const gridBoard = document.querySelector('.board-container');
const winnerText = document.getElementById('winner-announce');
const resetBtn =  document.querySelector('.reset-game');

const human = "X";
const ai = "O";

let currentPlayer = human;

let emptyCells = [];


function renderMarker(id, marker){
    document.getElementById(id).textContent = marker;
}

function minimax(board, depth, isMaximizing){
    let result = checkWin();

    if(isMaximizing){

    }
    return 1;
}

let scores = {
    "X" : 1,
    "O":-1,
    "tie":0

}

/*##### AI ######*/

function bestMove(){
    let bestScore = -Infinity;
    let move;
    let score;

    for(let i = 0;i < 9;i++){
        if(board[i] == ''){
            board[i] = ai;
            score = minimax(board,0, true);
            board[i] = '';
            if(score > bestScore){
                bestScore = score;
                move = i;
            }
        }
    }
    board[move] = ai;
    renderMarker(move, ai); 
    checkWin();
    currentPlayer = human;

}
/*#### END AI ####*/

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

    function resetGame(){
        clearCells();
        board = ['','','','','','','','',''];
        gridBoard.classList.remove('no-click');
        winnerText.textContent = '';
        currentPlayer = human;
    }

    function clearCells(){
        for(let i = 0; i < 9; i++ ){
            document.getElementById(i).textContent = '';
        }
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

    function checkWin(){

        emptyCells = board.filter((el) => el != "")
        console.log(emptyCells.length);

        winCombinations.forEach(comb => {
            if(board[comb[0]] === human && board[comb[1]] === human && board[comb[2]] === human){
                gameWon(human);
                return 1;
            }else if(board[comb[0]] === ai && board[comb[1]] === ai && board[comb[2]] === ai){
                gameWon(ai)
                return -1;
            }

        })
        if(emptyCells.length == 9){
            gameWon("Tie")
            return 0;
        }
   }

   

    function playRound(e){

    let cell = e.target.id;

        if(board[cell] != '')return;

        renderMarker(cell, human);

        board[cell] = human;

        checkWin(human);

  
        bestMove()

        

    }
 
resetBtn.addEventListener('click', resetGame);

gridBoard.addEventListener('click', playRound );

