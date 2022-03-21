import {useState} from 'react'
import Swal from "sweetalert2";
import './App.css';
import {
  validateColumnWinner,
  validateRowWinner,
  validateDiagonal,
  validateIdentical
} from "./TriquiValidators";

function App() {

  const [player, setPlayer] = useState({
    before:"O",
    after:"X"
  });

  const [grid, setGrid] = useState([Array(3).fill("-"), Array(3).fill("-"), Array(3).fill("-")]);
  
  const HandlePlayerChange1 = (e) => {
    e.preventDefault();
    let position = e.target.id.split("-")
    console.log("row", position[0])
    console.log("colum", position[1])
    grid[position[0]][position[1]]=player.after;
    isWinner(position[0], position[1], grid, player.after)
    setPlayer({
      ...player,
      before: "X",
      after:"O",
    });
  }

  const HandlePlayerChange2 = (e) => {
    e.preventDefault();
    let position = e.target.id.split("-")

    grid[position[0]][position[1]]=player.after;
    isWinner(position[0], position[1], grid, player.after)
    setPlayer({
      ...player,
      before:"O",
      after:"X",
    });
  }

  const HandleReset = (e) => {
    e.preventDefault();
    setGrid([Array(3).fill("-"), Array(3).fill("-"), Array(3).fill("-")]);
  }

  const isWinner = (row, col, grid, turn) => {

    if(validateRowWinner(row, grid, turn) || validateColumnWinner(col, grid, turn) || validateIdentical(grid, turn) || validateDiagonal(grid, turn)) {
      if(turn==="X"){
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Gana el jugador 1",
          text: "Felicitaciones!",
        });
      } else {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Gana el jugador 2",
          text: "Felicitaciones!!!",
        });
      }
      setGrid([Array(3).fill("-"), Array(3).fill("-"), Array(3).fill("-")]);
    }

  }

  return (
    <div className="App">
      <h1>Triqui Game</h1>
      {grid.map((row, rowId) => {

        return(
          <div>
            {row.map((cell, columnId) => {
          
              return(
                cell!=="-"?
                <button id={`${rowId}-${columnId}`}>{cell}</button> 
                :player.after==="X" ? 
                <button id={`${rowId}-${columnId}`}  onClick={HandlePlayerChange1}>{cell}</button> : 
                <button id={`${rowId}-${columnId}`}  onClick={HandlePlayerChange2}>{cell}</button>) 
            })}
          </div>
        )
      })}
      <div className='menu'>
        <button className='buttons' onClick={HandleReset}>Reset</button>
        <button className='buttons' onClick={HandleReset}>Historial</button>
      </div>
    </div>
  );
}

export default App;
