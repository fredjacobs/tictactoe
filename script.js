const board = [];
const gridBoard = document.querySelector('.board-container');

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

    function gameWon(){
        console.log(`Game Won!!!`);
    }

    function checkWin(mark){

        winCombinations.forEach(comb => {
            if(board[comb[0]] == mark && board[comb[1]] == mark && board[comb[2]]){
                console.log(`WINNER`);
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

        checkWin("X");

        currentPlayer = "PlayerTwo";
    }else{

        if(board[cell] != undefined)return;

        e.target.closest('.gameCell').textContent = "O";
        
        currentPlayer = 'PlayerOne';

        board[cell] = "O";

        checkWin("O");
    }

    /* console.log(board); */
    
}



 
