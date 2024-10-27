document.addEventListener("DOMContentLoaded", () => {
    const squares = document.querySelectorAll("#board, > div");
    let currentPlayer = 'X';
    const gameState = Array(9).fill(null);

    function handleSquareClick(event) {
        const square = event.target;
        const index = Array.from(squares).indexOf(square);

        if (gameState[index]) return;

        square.textContent = currentPlayer;
        square.classList.add(currentPlayer);
        gameState[index] = currentPlayer;

        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
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