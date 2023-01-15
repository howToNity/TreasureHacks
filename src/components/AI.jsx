import React, { useState, useEffect } from "react";
import "../AI.css"

const AI = () => {
    const [winner, setWinner] = useState('No winner');

    const [board, setBoard] = useState({
        '0': '-',
        '1': '-',
        '2': '-',
        '3': '-',
        '4': '-',
        '5': '-',
        '6': '-',
        '7': '-',
        '8': '-'
    }
    )

    useEffect(() => {
        if (board['0'] === board['1'] && board['1'] === board['2'] && board['2'] !== '-') {
            setWinner(board['0'])
        }
        else if (board['3'] === board['4'] && board['4'] === board['5'] && board['5'] !== '-') {
            setWinner(board['3'])
        }
        else if (board['6'] === board['7'] && board['7'] === board['8'] && board['8'] !== '-') {
            setWinner(board['6'])
        }
        else if (board['0'] === board['3'] && board['3'] === board['6'] && board['6'] !== '-') {
            setWinner(board['0'])
        }
        else if (board['1'] === board['4'] && board['4'] === board['7'] && board['7'] !== '-') {
            setWinner(board['1'])
        }
        else if (board['2'] === board['5'] && board['5'] === board['8'] && board['8'] !== '-') {
            setWinner(board['2'])
        }
        else if (board['0'] === board['4'] && board['4'] === board['8'] && board['8'] !== '-') {
            setWinner(board['0'])
        }
        else if (board['2'] === board['4'] && board['4'] === board['6'] && board['6'] !== '-') {
            setWinner(board['2'])
        }
    }, [board]);

    useEffect(() => {
        console.log(board);
    }, [board]);


    function handleEvent(e) {
        if (board[e] === '-' && winner === 'No winner') {
            setBoard(prevState => ({ ...prevState, [e]: 'O' }));
            var legalMoves = Object.fromEntries(Object.entries(board).filter(([key]) => board[key] === '-'));
            delete legalMoves[e]
            legalMoves = Object.keys(legalMoves)
            if (legalMoves.length !== 0) {
                var randomMove = legalMoves[Math.floor(Math.random() * legalMoves.length)]
                setBoard(prevState => ({ ...prevState, [randomMove]: 'X' }));
            }
        }
    }

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center'
        }}>

            <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '25px',
                color: 'green'
            }}>
                {(winner && winner !== 'No winner') ? (`${winner} won!`) : ''}
            </div>
            <table >
                <tbody>
                    <tr>
                        <td onClick={() => {
                            handleEvent('0');
                        }}> {board['0']} </td>
                        <td onClick={() => {
                            handleEvent('1')
                        }}> {board['1']} </td>
                        <td onClick={() => {
                            handleEvent('2')
                        }}> {board['2']} </td>
                    </tr>
                    <tr>
                        <td onClick={() => {
                            handleEvent('3')
                        }}> {board['3']} </td>
                        <td onClick={() => {
                            handleEvent('4')
                        }}> {board['4']} </td>
                        <td onClick={() => {
                            handleEvent('5')
                        }}> {board['5']} </td>
                    </tr>
                    <tr>
                        <td onClick={() => {
                            handleEvent('6')
                        }}> {board['6']} </td>
                        <td onClick={() => {
                            handleEvent('7')
                        }}> {board['7']} </td>
                        <td onClick={() => {
                            handleEvent('8')
                        }}> {board['8']} </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
};

export default AI;