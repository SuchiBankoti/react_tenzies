import React from "react"
import Dice from "./Dice"
import img from "./winner.png"
function newDice(arr) {
  arr = []
  for (let i = 1; i < 11; i++) {
    arr.push({
      value: Math.floor(Math.random() * 6) + 1,
      hold: false,
      id: i
    })
  }
  return arr
}

export default function App() {
  const [diceNum, setDiceNum] = React.useState(() => newDice([]))
  function holdDice(id) {
    setDiceNum(prev => prev.map(obj =>
      (obj.id === id ? { ...obj, hold: !obj.hold } : obj)
    ))
  }
  let newArr = diceNum.map((element) => <Dice holdDice={holdDice} numId={element.id}
    value={element.value} hold={element.hold} />)
  function rollDice() {
    setDiceNum(prev => prev.map(obj =>
      (obj.hold ? obj : { ...obj, value: Math.floor(Math.random() * 6) + 1 })
    ))
  }
  function newGame() {
    setDiceNum(newDice())
  }
  const Winner = diceNum.every((obj) => obj.value === (diceNum[0].value) ? true : false)

  return (
    <div className="mainBody">
      <div>
        <h1>Tenzies</h1>
      </div>
      <div>
        {Winner ? <img alt="winner" src={img} /> : <p>Roll until all dice are the same. Click each die to freeze it at its current value between rolls</p>}
      </div>
      {Winner ? "" : <div className="diceContainer"> {newArr}
      </div>}

      <div>
        {Winner ? <button onClick={newGame}>New Game</button> : <button onClick={rollDice}>Roll</button>}
      </div>
    </div>
  )
}
