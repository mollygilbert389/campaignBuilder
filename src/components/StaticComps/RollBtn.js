import React from "react"
import {Button} from "react-bootstrap"
import "./style.css"


const diceRoller = function(props) {
    
    function rollIt() {
        let rollingArrary = props.rollingArray

        let diceMax = rollingArrary.length
        let randoNumber = Math.floor(Math.random() * Math.floor(diceMax))

        let finalItem = rollingArrary[randoNumber]
        props.handleRoll(finalItem, props.name)
    }


    return (
        <Button className="giveMeSomeSpace" onClick={rollIt}>Roll it</Button>
    )
}

export default diceRoller;