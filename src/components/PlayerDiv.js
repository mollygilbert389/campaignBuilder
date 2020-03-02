import React from 'react'

export default function PlayerDiv(props) {
    return (
    <div className="playerNameSpace">
        Player{props.num}: {props.playerName}
        Class: {props.playerClass}
    </div>
)
}