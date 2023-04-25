function bestMove(){
    let bestScore = -Infinity;
    let move;

    for(let i = 1;i < 10;i++){
        if(board[i] == ''){
            board[i] = ai;
            let score = minimax(board);
            board[i] = '';
            if(score > bestScore){
                bestScore = score;
                move = {i};
            }
        }
    }
    board[move.i] = ai;
    currentPlayer = human;
}

function minimax(board){
    return 1;
}
