import React, {Component} from 'react'
import Modal from 'react-bootstrap/Modal'
import "./style.css"
import MonsterSelect from './MonsterSelect'

class Monsters extends Component {


    createMonsterForm = () => {
        let monsterFormNumber = this.props.campaign.monsterNum 
        monsterFormNumber = parseInt(monsterFormNumber)

        const monsterFormsArray = []

        for (var i = 0; i < monsterFormNumber; i++) {
            monsterFormsArray.push(<MonsterSelect/>) 
        }

        return monsterFormsArray
    }


render() {  

    return (
        
        <div>
        <Modal.Dialog id="villianbtn">
            <Modal.Header>
                <Modal.Title>Monster Monster</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <p>Now that we have a good idea of rooms and dungeon let's throw some monsters into the mix. Your monsters should be varying in difficulty and type. Pick a few monster below, and we'll generate the rest for you.</p>

                <div className="partyFormSpace">
                
                    <ul>
                        {this.createMonsterForm()}
                    </ul>
                
                </div>
                
            </Modal.Body>
            
        </Modal.Dialog>
        </div>
    );
}
}

export default Monsters;