import React, {Component} from 'react'
import Modal from 'react-bootstrap/Modal'
import "./style.css"
import MonsterSelect from './MonsterSelect'

class Monsters extends Component {
    
    constructor() {
        super();
        this.state ={
        }
        this.handleMonsterForm = this.handleMonsterForm.bind(this)
    }

    handleMonsterForm() {
        
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
                <div>
                <MonsterSelect></MonsterSelect>
                </div>
                </div>
                
            </Modal.Body>
            
        </Modal.Dialog>
        </div>
    );
}
}

export default Monsters;