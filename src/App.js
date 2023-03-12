import React from "react";
import Dice from "./Dice";

const n = 10;
export default function App() {
  const [dice, setDice] = React.useState(allNewDice());

  function allNewDice() {
    let newDice = [];
    for (let i = 0; i < n; i++) {
      newDice.push({
        value: Math.ceil(Math.random() * 6),
        isHeld: false,
        id: i + 1,
      });
    }
    return newDice;
  }
  function ResetDice() {
    let first = dice[0].value;
    let allHeld = dice.every((die) => die.isHeld === true);
    let allSame = dice.every((die) => die.value === first);
    if (allHeld && allSame) {
      return true;
    }
    return false;
  }
  function RollDice() {
    if (ResetDice()) {
      setDice((prev) =>
        prev.map((die) => {
          return {
            ...die,
            value: Math.ceil(Math.random() * 6),
            isHeld: false,
          };
        })
      );
    } else {
      setDice((prev) =>
        prev.map((die) =>
          !die.isHeld ? { ...die, value: Math.ceil(Math.random() * 6) } : die
        )
      );
    }
  }
  function holdDice(_id) {
    setDice((prev) =>
      prev.map((die) =>
        die.id === _id ? { ...die, isHeld: !die.isHeld } : die
      )
    );
  }
  const diceElements = dice.map((die) => {
    return <Dice key={die.id} num={die} holdDice={holdDice} />;
  });
  return (
    <div className="shellout">
      <div className="shellin">
        <div>
          <h1>Tenzies</h1>
          <p>
            Roll the dice and select the digits, keep rolling untill you get the
            same digit on every dice
          </p>
        </div>
        <div className="dice-container">{diceElements}</div>
        <button onClick={RollDice}>{ResetDice() ? "Reset" : "Roll"}</button>
      </div>
    </div>
  );
}
