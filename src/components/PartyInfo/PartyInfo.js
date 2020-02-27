import React, {Component} from 'react'
import {Button} from 'react-bootstrap'
import "./style.css"

class PartyInfo extends Component {

//     constructor() {
//         super();
//         this.state ={
//             showModal: false,
//             value: ""
//         }
//     }

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

render() {  

    return (
        <div>
            <Button>Party Info!</Button>
        </div>
    );
}
}

export default PartyInfo;