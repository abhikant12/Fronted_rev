import { useEffect, useState } from 'react';
import './style.css'


function TicTacToe(){

const [count, setCount] =  useState(1);
const [markedA , setMarkedA] = useState([]);
const [markedB , setMarkedB] = useState([]);
const [win , setWin] = useState("");


function handleclick(index){     
      if(markedA.includes(index) || markedB.includes(index)){
           alert("this cell is already occupied");
           return ;
      }
      if(win){
          alert(`please restart the game! player ${count%2 == 1 ? "O" : "X"} has already won`);
          return ;
      }
      setCount((preCount) => (preCount + 1));
      {count%2 === 1 ?  setMarkedA((preData) => ([...preData, index ])) : setMarkedB((preData) => ([...preData, index]))}
}

function check(){
    const winningCombinations = [
        [1, 2, 3], [4, 5, 6], [7, 8, 9],                 // Rows
        [1, 4, 7], [2, 5, 8], [3, 6, 9],                 // Columns
        [1, 5, 9], [3, 5, 7]                             // Diagonals
      ];
      for(const arr of winningCombinations){
        if(markedA.includes(arr[0]) && markedA.includes(arr[1]) && markedA.includes(arr[2])){
            setWin("A");
            return;
        }
      }
      for(const arr of winningCombinations){
        if(markedB.includes(arr[0]) && markedB.includes(arr[1]) && markedB.includes(arr[2])){
            setWin("B");
            return;
        }
      }
      if(count === 10){
         setWin("D");
         return ;
      }
}

function reset(){
    setMarkedA([]);
    setMarkedB([]);
    setCount(1);
    setWin("");
}

useEffect(() => {check()}, [count]);


    return (
        <div className='wrapper'> 
            <div className="container">
                <div className="row"> 
                    <div className="cell"  onClick={() => handleclick(1)}> {markedA.includes(1) ? "X" : (markedB.includes(1) ? "O" : "")} </div>
                    <div className="cell"  onClick={() => handleclick(2)}> {markedA.includes(2) ? "X" : (markedB.includes(2) ? "O" : "")} </div>
                    <div className="cell"  onClick={() => handleclick(3)}> {markedA.includes(3) ? "X" : (markedB.includes(3) ? "O" : "")} </div>
                </div>

                <div className="row"> 
                    <div className="cell"  onClick={() => handleclick(4)}> {markedA.includes(4) ? "X" : (markedB.includes(4) ? "O" : "")} </div>
                    <div className="cell"  onClick={() => handleclick(5)}> {markedA.includes(5) ? "X" : (markedB.includes(5) ? "O" : "")} </div>
                    <div className="cell"  onClick={() => handleclick(6)}> {markedA.includes(6) ? "X" : (markedB.includes(6) ? "O" : "")}  </div>
                </div>

                <div className="row"> 
                    <div className="cell"  onClick={() => handleclick(7)}> {markedA.includes(7) ? "X" : (markedB.includes(7) ? "O" : "")} </div>
                    <div className="cell"  onClick={() => handleclick(8)}> {markedA.includes(8) ? "X" : (markedB.includes(8) ? "O" : "")} </div>
                    <div className="cell"  onClick={() => handleclick(9)}> {markedA.includes(9) ? "X" : (markedB.includes(9) ? "O" : "")} </div>
                </div>
            </div>

            {(win === "" && count < 10) ? (<h2 className='label'> player {count%2 == 1 ? "X" : "O"} turn </h2>) :
                   ((win === "D") ? ( <h2 className='label'> The game is a draw! Please restart the game. </h2>) :
                   (<h2 className='label'> player {count%2 == 1 ? "O" : "X"} Win! </h2>))}
            
            <button className='reset' onClick={() => (reset())} > Reset </button>
         </div>
    )
};

export default TicTacToe;