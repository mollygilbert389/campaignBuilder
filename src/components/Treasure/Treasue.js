import React, {Component} from 'react'
import Modal from 'react-bootstrap/Modal'
import {Button} from 'react-bootstrap'
import {FormControlLabel, Checkbox, FormGroup, Slider} from '@material-ui/core'
import "./style.css"

class Treasure extends Component {

    constructor() {
        super();
        this.state ={
            showModal: false,
            equipment: '', 
            magicItem: '',
            gems: '',
            money:'',
            tradeGoods: '',
            justXp: ''
        }
    }
        handleChange = (event) => {
            this.setState({
                [event.target.name]: event.target.checked 
            });
          };

        handleClick = () => {
            this.setState({
                showModal: !this.state.showModal,
            })
        }

render() {  

    return (
        <div>
        <div className="btns">
        <Button id="questGiver" variant="outline-success" size="lg" onClick={this.handleClick}>Treasure
        </Button>
            </div>
        <Modal show={this.state.showModal}>
        <Modal.Dialog id="villianbtn">
            <Modal.Header>
                <Modal.Title>Let's talk Treasure!</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <p>Below are some buttons to help create the tresure and experience earned for your game!</p>
                <p>You have selected {'x'} rooms and a {'short'} campaign. Due to this reason we suggest you have {'x'} treasures excluding the quest price. Please check the boxes below of items you'd like to include and we'll generate them for you.</p>

                <br></br>

                <Slider
                min={1}
                max={5}
                defaultValue={3}
                valueLabelDisplay="on"
                />

                <FormGroup>
                <FormControlLabel
                control={
                <Checkbox 
                checked={this.equipment} 
                onChange={this.handleChange} 
                name="equipment" 
                color="primary"/>}
                label="Equipment"
                />

                <FormControlLabel
                control={
                <Checkbox 
                checked={this.magicItem} 
                onChange={this.handleChange} 
                name="Magic Items" 
                color="primary"/>}
                label="Magic Items"
                />

                <FormControlLabel
                control={
                <Checkbox 
                checked={this.gems} 
                onChange={this.handleChange} 
                name="Gems, Jewelry, Art" 
                color="primary"/>}
                label="Gems, Jewelry, Art"
                />

                <FormControlLabel
                control={
                <Checkbox 
                checked={this.tradeGoods} 
                onChange={this.handleChange} 
                name="Trade Goods" 
                color="primary"/>}
                label="Trade Goods"
                />

              {/*   {adding disabler checkbox} */}
                {/* <FormControlLabel {this.tradeGoods || this.gems || this.magicItem || this.equipment : {disabled} ? }
                control={
                <Checkbox 
                checked={this.justXp} 
                onChange={this.handleChange} 
                name="Just XP" 
                color="primary"/>}
                label="Just XP"
                /> */}

            </FormGroup>
            </Modal.Body>

            <Modal.Footer>
                <Button variant="secondary" onClick={this.handleClick} >Save</Button>
            </Modal.Footer>
        </Modal.Dialog>
        </Modal>
        </div>
    );
}
}

export default Treasure;