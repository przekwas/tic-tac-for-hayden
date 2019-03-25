let cells = document.querySelectorAll('.row > div');
let currentPlayer = 'X';
let gameOver = false;

for (let i = 0; i < cells.length; i++) {
    cells[i].addEventListener('click', cellClicked);
}

function cellClicked() {

    if(gameOver === true) {
        //reset game logic
        return;
    }

    //if the square has an X or O .. 
    if (event.target.textContent !== "") {
        return;
    }

    event.target.textContent = currentPlayer;
    checkWinDrawOrLose();
    togglePlayer();
}

function togglePlayer() {
    if (currentPlayer === 'X') {
        currentPlayer = 'O';
    } else {
        currentPlayer = 'X';
    }
}

function checkWinDrawOrLose() {
    if (checkTop()) {
        console.log(currentPlayer + " is the winner!");
        gameOver = true;
    }
}

function checkTop() {
    if ((cells[0].textContent === cells[1].textContent && cells[1].textContent === cells[2].textContent) && !isEmpty(0, 1, 2)) {
        return true;
    } else {
        return false;
    }
}

function isEmpty(x, y, z) {
    if (cells[x].textContent === "" || cells[y].textContent === "" || cells[z].textContent === "") {
        return true;
    } else {
        return false;
    }
}