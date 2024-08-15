import { useEffect, useState } from 'react'
import Square from './components/Square'
import './styles.css'

export default function App() {
  //makes squares an array with 9 elements called as null which will cahnge in futures places
  const [squares, setSquares] = useState(Array(9).fill(null))
  const [value, setvalue] = useState('X')
  let winner

  function calculateWinner() {
    const wins = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ]

    for (let win of wins) {
      const [a, b, c] = win
      if (squares[a] == squares[b] && squares[b] == squares[c] && squares[c] != null) return (squares[a])
    }
  }

  winner = calculateWinner()

  function handleClick(i) {
    if (squares[i]) return;
    // Create a copy of the squares array using the slice method
    const nextSquares = squares.slice();
    // Update the first element of the copied array to "X"
    if (value === 'X') {
      nextSquares[i] = 'X'
      setvalue('O')
    } else {
      nextSquares[i] = 'O'
      setvalue('X')
    }

    // Set the state of squares to the updated array
    setSquares(nextSquares);
  }


  return (
    <div className='App'>
      <div className='left'>
        {winner ? `Winner: ${winner}` : `Next Player: ${value}`}

        <div className="board-row">
          <Square value={squares[0]}
            onSquareClick={() => handleClick(0)}></Square>
          <Square value={squares[1]}
            onSquareClick={() => handleClick(1)}></Square>
          <Square value={squares[2]}
            onSquareClick={() => handleClick(2)}></Square>
        </div>
        <div className="board-row">
          <Square value={squares[3]}
            onSquareClick={() => handleClick(3)}></Square>
          <Square value={squares[4]}
            onSquareClick={() => handleClick(4)}></Square>
          <Square value={squares[5]}
            onSquareClick={() => handleClick(5)}></Square>
        </div>
        <div className="board-row">
          <Square value={squares[6]}
            onSquareClick={() => handleClick(6)}></Square>
          <Square value={squares[7]}
            onSquareClick={() => handleClick(7)}></Square>
          <Square value={squares[8]}
            onSquareClick={() => handleClick(8)}></Square>
        </div>
      </div>
      <div className='right'>
        <ol>
          <li><button>go to start</button></li>
        </ol>


      </div>


    </div>
  )
}