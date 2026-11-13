
import React, { useState } from "react";
import "./TicTacToe.css";

function TicTacToe() {

    // Store the 9 game cells
    const [board, setBoard] = useState(
        Array(9).fill(null) );

    // Track the current player
    const [isXNext, setIsXNext] = useState(true);

    // Winning combinations
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

    // Check winner
    const calculateWinner = (currentBoard) => {

        for (let combination of winningCombinations) {

            const [a, b, c] = combination;

            if (
                currentBoard[a] &&
                currentBoard[a] === currentBoard[b] &&
                currentBoard[a] === currentBoard[c]
            ) {
                return currentBoard[a];
            }
        }

        return null;
    };

    const winner = calculateWinner(board);

    // Check draw
    const isDraw = !winner && board.every(
        (cell) => cell !== null
    );

    // Display game status
    const status = winner
        ? `Player ${winner} Wins!`
        : isDraw
        ? "Game Draw!"
        : `Player ${isXNext ? "X" : "O"}'s Turn`;

    // Handle cell click
    const handleClick = (index) => {

        if (board[index] || winner || isDraw) {
            return;
        }

        const updatedBoard = [...board];

        updatedBoard[index] = isXNext ? "X" : "O";

        setBoard(updatedBoard);

        setIsXNext(!isXNext);
    };

    // Restart game
    const handleRestart = () => {

        setBoard(Array(9).fill(null));

        setIsXNext(true);
    };

    return (
        <div className="game-page">

            <div className="game-container">

                <h1>Tic Tac Toe</h1>

                <p className="game-subtitle">
                    Two Players - One Winner
                </p>

                <h2 className="game-status">
                    {status}
                </h2>

                <div className="game-board">

                    {board.map((cell, index) => (

                        <button
                            type="button"
                            key={index}
                            className={`game-cell ${
                                cell === "X"
                                    ? "cell-x"
                                    : cell === "O"
                                    ? "cell-o"
                                    : ""
                            }`}
                            onClick={() => handleClick(index)}
                            aria-label={`Cell ${index + 1}`}
                        >
                            {cell}
                        </button>

                    ))}

                </div>

                <button
                    type="button"
                    className="restart-button"
                    onClick={handleRestart}
                >
                    Restart Game
                </button>

            </div>

        </div>
    );
}

export default TicTacToe;
