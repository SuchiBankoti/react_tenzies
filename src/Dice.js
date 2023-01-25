import React from "react";

export default function Dice(props) {
  const { num, holdDice } = props;
  return (
    <div
      className="dice"
      onClick={() => holdDice(num.id)}
      style={{ background: num.isHeld ? " #80eba7" : " #e3ebe6" }}
    >
      <div>{num.value}</div>
    </div>
  );
}
