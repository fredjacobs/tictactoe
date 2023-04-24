let board = [];
const gridBoard = document.querySelector('.board-container');
const winnerText = document.getElementById('winner-announce');

 /*
   
    1  |  2  |  3
    --------------
    4  |  5  |  6
    -------------
    7  |  8  |  9    

 
 */

    

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

const playerOne = {
    name: "PlayerOne",
    token: "X"
}

const playerTwo = {
    name:"PlayerTwo",
    token: "O"
}

let currentPlayer = playerOne.name;

gridBoard.addEventListener('click', playRound );

function playRound(e){

    let cell = e.target.id;

    if(currentPlayer === 'PlayerOne'){

        if(board[cell] != undefined)return;

        e.target.closest('.gameCell').textContent = "X";

        board[cell] = "X";

        checkWin("X", 'Player One');

        currentPlayer = "PlayerTwo";
    }else{

        if(board[cell] != undefined)return;

        e.target.closest('.gameCell').textContent = "O";
        
        currentPlayer = 'PlayerOne';

        board[cell] = "O";

        checkWin("O", "Player Two");
    }

    /* console.log(board); */
    
}



 
