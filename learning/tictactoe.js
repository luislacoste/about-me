import React, { useState } from "react";
import "./App.css";

export default function TicTacToe() {
    const [turn, setTurn] = useState("O");
    const [cells, setCells] = useState(Array(9).fill(""));
    const [winner, setWinner] = useState();
    const [isDraw, setIsDraw] = useState(false);

    const checkwinner = (arr) => {
        let combos = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];

        for (let combo in combos) {
            if (arr[combos[combo][0]] === arr[combos[combo][1]] && arr[combos[combo][1]] === arr[combos[combo][2]] && arr[combos[combo][0]] !== "") {
                setWinner(arr[combos[combo][0]]);
                return;
            }
        }
    };

    const handleClick = (num) => {
        if (winner || cells[num] !== "") return;

        let arr = [...cells];
        if (turn === "X") {
            arr[num] = "X";
            setTurn("O");
        } else {
            arr[num] = "O";
            setTurn("X");
        }
        checkwinner(arr);
        setCells(arr);
        if (!arr.includes("") && !winner) {
            setIsDraw(true);
        }
    };

    const Cell = ({ num }) => {
        const cellValue = cells[num];
        const cellClassName = cellValue ? `cell cell-${cellValue}` : "cell";

        return (
            <td className={cellClassName} onClick={() => handleClick(num)}>
                {cellValue}
            </td>
        );
    };

    const handleReset = () => {
        setWinner();
        setIsDraw(false);
        setCells(Array(9).fill(""));
    };

    return (
        <div className="container">
            <div className={`winner ${winner || isDraw ? "show" : ""}`}>
                {winner ? `Winner is: ${winner}` : isDraw ? "Its a draw" : ""}
            </div>
            <table>
                <tbody>
                    <tr>
                        <Cell num={0} />
                        <Cell num={1} />
                        <Cell num={2} />
                    </tr>
                    <tr>
                        <Cell num={3} />
                        <Cell num={4} />
                        <Cell num={5} />
                    </tr>
                    <tr>
                        <Cell num={6} />
                        <Cell num={7} />
                        <Cell num={8} />
                    </tr>
                </tbody>
            </table>
            <button className="reset-button" onClick={handleReset}>
                Reset
            </button>
        </div>
    );
}