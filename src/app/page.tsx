"use client";
import Header from '../app/components/headers/header'
import Player from '../app/components/player/player'
import GameBoard from '../app/components/gameboard/gameboard'
import { useState } from 'react';


export default function Home() {
  const [activePlayer, setActivePlayer] = useState('X');

  function handleSquareSlect(){
    setActivePlayer(currentPlayer => {
      return currentPlayer ==='X' ? 'O' : 'X';
    })
  }
  return (
    <>
    <Header></Header>
    <main>
      <div id ="game-container">
        <ol id='players' className='highlight-player'>
          <Player initialName='Player 1' symbol='X' isActive={activePlayer==='X'} />
          <Player initialName='Player 2' symbol='O' isActive={activePlayer==='O'}/>
        </ol>
        <GameBoard onSelectPlayer = {handleSquareSlect} symbol = {activePlayer}/>
      </div>
    </main>
    </>
  )
}
