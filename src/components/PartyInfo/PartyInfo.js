import React, {Component} from 'react'
import {Button} from 'react-bootstrap'
import "./style.css"

class PartyInfo extends Component {

    constructor() {
        super();
        this.state ={
            value: ""
        }
    }

//       close = (event) =>  {
//           this.setState({
//               showModal: false,
//               value: event.target.value
//             })
//             let sideQuest = this.state.value
//             let newName = document.getElementById('sideQuestSpace')
//             newName.textContent = "Side Quests: " + sideQuest
//       }

//       //handles the key stoke changes????
//       handleChange = (event) => {
//         this.setState({
//             value: event.target.value
//         })
//       }

// handleClick = () => {
//     this.setState({
//         showModal: !this.state.showModal,
//       })
// }

handleClick = (e) => {
    let num = e.target.id
    if (num === "3") {
        const newDiv = document.createElementWithClass('div', 'mainDiv')
        const labels = document.createElementWithClass('label', 'partylabels')
        newDiv.appendChild(labels)
    }
     if (num === "4") {
        alert("You clicked 4")
    }
     if (num === "5") {
        alert("You clicked 5")
    }
     if (num === "6") {
        alert("You clicked 6")
    }
     if (num === "7") {
        alert("You clicked 7")
    }
     if (num === "8") {
        alert("You clicked 8")
    }

}


render() {  

    return (
        <div>
            <p>Click on the number of party members you plan to have. Must be at least 3 (exluding the DM) and the max is 8.</p>
            <div className="partyBtnSpace">
            <div className="prtyBtns">
            <Button id="3" variant="outline-primary" onClick={this.handleClick}>3</Button>
            </div>
            <div className="prtyBtns">
            <Button id="4" variant="outline-primary" onClick={this.handleClick}>4</Button>
            </div>
            <div className="prtyBtns">
            <Button id="5" variant="outline-primary" onClick={this.handleClick}>5</Button>
            </div>
            <div className="prtyBtns">
            <Button id="6" variant="outline-primary" onClick={this.handleClick}>6</Button>
            </div>
            <div className="prtyBtns">
            <Button id="7" variant="outline-primary" onClick={this.handleClick}>7</Button>
            </div>
            <div className="prtyBtns">
            <Button id="8" variant="outline-primary" onClick={this.handleClick}>8</Button>
            </div>
            </div>


        </div>
    );
}
}

export default PartyInfo;