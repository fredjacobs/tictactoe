let board = [];
const gridBoard = document.querySelector('.board-container');
const winnerText = document.getElementById('winner-announce');
const resetBtn =  document.querySelector('.reset-game');

const playerOne = {
    name: "PlayerOne",
    token: "X"
}

const playerTwo = {
    name:"PlayerTwo",
    token: "O"
}

let currentPlayer = playerOne.name;

const winCombinations = [
        [1,2,3],
        [4,5,6],
        [7,8,9],
        [1,4,7],
        [8,5,2],
        [3,6,9],
        [7,5,3],
        [1,5,9]
    ]

    function resetGame(){
        clearCells();
        board = [];
        gridBoard.classList.remove('no-click');
        winnerText.textContent = '';
             
        currentPlayer = playerOne.name;
    }

    function clearCells(){
        for(let i = 1; i <= 9; i++ ){
            document.getElementById(i).textContent = '';
        }
    }

    function gameWon(player){
        console.log(`Game Won!!!`);
        winnerText.textContent = `Winner is ${player}!`;
        gridBoard.classList.add('no-click');
      
        board = [];
    }

    function checkWin(mark, player){

        winCombinations.forEach(comb => {
            if(board[comb[0]] === mark && board[comb[1]] === mark && board[comb[2]] === mark){
                gameWon(player);
            }
        })
   }

   function renderBoard(id, marker){
       document.getElementById(id).textContent = marker;
   }

    function playRound(e){

    let cell = e.target.id;

    if(currentPlayer === 'PlayerOne'){

        if(board[cell] != undefined)return;

        renderBoard(cell, playerOne.token);

        board[cell] = "X";

        checkWin("X", 'Player One');

        currentPlayer = "PlayerTwo";
    }else{

        if(board[cell] != undefined)return;

        renderBoard(cell, playerTwo.token);
        
        currentPlayer = 'PlayerOne';

        board[cell] = "O";

        checkWin("O", "Player Two");
    }

    
    
}


resetBtn.addEventListener('click', resetGame);

gridBoard.addEventListener('click', playRound );





 
