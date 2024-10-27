document.addEventListener("DOMContentLoaded", () => {
    const squares = document.querySelectorAll("#board, > div");
    let currentPlayer = 'X';
    const gameState = Array(9).fill(null);
    const statusDiv = document.getElementById('status');

    const winningCombinations = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    function checkForWinner() {
        for (const combination of winningCombinations){
            const [a ,b, c] = combination;

            if (gameState[a] && gameState[a] === gameState[b] && gameState[a] === gameState[c]) {
                statusDiv.textContent = 'Congratulations! ${gameState[a]} is the Winner!';
                statusDiv.classList.add('you-won');
                return true;
            }
        }
        return false;
    }

    function handleSquareClick(event) {
        const square = event.target;
        const index = Array.from(squares).indexOf(square);

        if (gameState[index] || statusDiv.classList.contains('you-won')) return;

        square.textContent = currentPlayer;
        square.classList.add(currentPlayer);
        gameState[index] = currentPlayer;

        if (!checkForWinner()) {
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';    
        }
    }
    function handleMouseOver(event) {
        const square = event.target;
        if (!square.textContent) {
            square.classList.add('hover');
        }
    }
    function handleMouseOut(event) {
        const square = event.target;
        square.classList.remove('hover');
    }

    squares.forEach(square => {
        square.classList.add('square');
        square.addEventListener('click', handleSquareClick);
        square.addEventListener('mouseover', handleMouseOver);
        square.addEventListener('mouseout', handleMouseOut);
    });
});