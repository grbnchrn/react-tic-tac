export default function GameOver({winner, onSelect}){
return(
    <div id="game-over">
        <h2>Game Over !!</h2>
        {winner ? <p>{winner} won the match </p> : <p>It's a draw </p>}
        
        <p>
            <button onClick={onSelect}>Rematch</button>
        </p>
    </div>
)
}