import { useState } from "react";
import {WINNING_COMBOS} from './winningCombo'
import GameOver from './gameover'

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function GameBoard({onSelectPlayer, symbol}) {
  const [gameBoard, setGameBoard] = useState(initialGameBoard);

  let winner;
  let hasDraw = true;
  WINNING_COMBOS.forEach(combo => {
    const firstSqaure = gameBoard[combo[0].row][combo[0].column]
    const secondSqaure = gameBoard[combo[1].row][combo[1].column]
    const thirdSqaure = gameBoard[combo[2].row][combo[2].column]
    
    if(firstSqaure && firstSqaure === secondSqaure && firstSqaure === thirdSqaure ){
      winner = firstSqaure;
    } else if(!(firstSqaure && secondSqaure && thirdSqaure) ){
      hasDraw = false;
    }
  });


  function handleSquareSlect(rowIndex, colIndex) {
    setGameBoard((prevGameBoard) => {
      const updateGameBoard = [...prevGameBoard.map((innerRow) => [...innerRow])];
      updateGameBoard[rowIndex][colIndex] = symbol;
      return updateGameBoard;
    });
    
    onSelectPlayer();
 
  }

  function handleRematch(){
    setGameBoard(initialGameBoard);
  }

  return (
    <>
    <ol id="game-board">
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button onClick={() => handleSquareSlect(rowIndex, colIndex)}
                disabled = {playerSymbol!=null}>
                  {playerSymbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
    {(winner || hasDraw) && <GameOver winner={winner} onSelect ={handleRematch}></GameOver>}
    </>
  );
}
