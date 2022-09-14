import React from "react"

export default function Dice(props) {
    return (<div className="dice-box" onClick={() => props.holdDice(props.numId)}
        style={{ backgroundColor: props.hold ? '#59E391' : 'white' }}>
        <h2 className="dice">{props.value}</h2>
    </div>)
}