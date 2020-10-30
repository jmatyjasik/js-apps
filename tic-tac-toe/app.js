const PLAYER1 = 'fa-circle-o';
const PLAYER2 = 'fa-times';
let round = 0;

const combinations = [
    [0,1,2], [3,4,5], [6,7,8],
    [0,3,6], [1,4,7], [2,5,8],
    [0,4,8], [2,4,6]
];

const board = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
]

const boxes = [...document.querySelectorAll('.box')];
const nextPlayerSpan = document.getElementById('nextplayer');
nextPlayerSpan.classList.add(round % 2 == 0? PLAYER1 : PLAYER2);
round++;
boxes.forEach(box => box.addEventListener('click', pick))

function pick(event) {
    const {row, column} = event.target.dataset;
    if(board[row][column] !== '') return;
    const value = round % 2 == 1? PLAYER1 : PLAYER2;
    event.target.classList.add(value);
    board[row][column] = value;

    nextPlayerSpan.classList.remove(PLAYER1, PLAYER2);
    nextPlayerSpan.classList.add(round % 2 == 0? PLAYER1 : PLAYER2);
    
    console.log(board);
    round += 1;

    const winner = check();
    if(winner){
        alert(winner);
    }
}

function check() {
    const result = board.reduce((total, row) => total.concat(row));
    let winner = null;
    let moves = {
        'fa-circle-o' : [],
        'fa-times': []
    }

    result.forEach((field, index) => moves[field]? moves[field].push(index): null);

    combinations.forEach(combination => {
        if (combination.every(index => moves[PLAYER1].indexOf(index) > -1)) {
            winner = 'Winner: Player 1';
        }
        if (combination.every(index => moves[PLAYER2].indexOf(index) > -1)) {
            winner = 'Winner: Player 2';
        }
    });

    return winner;
}