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
            equipment: false, 
            magicItem: false,
            gems: false,
            money: false,
            tradeGoods: false,
            justXp: false,
            treasues: [], 
        }
    }
        handleChange = (event) => {
            this.setState({
                [event.target.name]: event.target.checked 
            });

            if (event.target.checked) {
                this.setState({
                    treasues: event.target.value
                }, () => this.props.setTreasure(this.state.treasues))
            }
          };

        handleClick = () => {
            this.setState({
                showModal: !this.state.showModal,
            })
        }

        close = () => {
            this.setState({
                showModal: !this.state.showModal,
            })
        }

render() {  

    const{equipment} = this.state
    const{magicItem} = this.state
    const{gems} = this.state
    const{money} = this.state
    const{tradeGoods} = this.state
    const{justXp} = this.state

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
                <FormControlLabel disabled={(justXp) ? true: false}
                control={
                <Checkbox 
                checked={equipment} 
                onChange={this.handleChange} 
                name="equipment"
                value="Equipment" 
                color="primary"/>}
                label="Equipment"
                />

                <FormControlLabel disabled={(justXp) ? true: false}
                control={
                <Checkbox 
                checked={magicItem} 
                onChange={this.handleChange} 
                name="magicItem"
                value="Magic Item" 
                color="primary"/>}
                label="Magic Items"
                />

                <FormControlLabel disabled={(justXp) ? true: false}
                control={
                <Checkbox 
                checked={gems} 
                onChange={this.handleChange} 
                name="gems"
                value="Gems, Jewelry, Art" 
                color="primary"/>}
                label="Gems, Jewelry, Art"
                />

                <FormControlLabel disabled={(justXp) ? true: false}
                control={
                <Checkbox 
                checked={tradeGoods} 
                onChange={this.handleChange} 
                name="tradeGoods" 
                value="Trade Goods"
                color="primary"/>}
                label="Trade Goods"
                />

                <FormControlLabel disabled={(justXp) ? true: false}
                control={
                <Checkbox 
                checked={money} 
                onChange={this.handleChange} 
                name="money" 
                value="Money"
                color="primary"/>}
                label="Money"
                />

                <FormControlLabel disabled={(tradeGoods || gems || magicItem || equipment || money) ? true: false}
                control={
                <Checkbox 
                checked={justXp} 
                onChange={this.handleChange} 
                name="justXp" 
                value="XP Points"
                color="primary"/>}
                label="Just XP"
                />

            </FormGroup>
            </Modal.Body>

            <Modal.Footer>
                <Button variant="outline-success" onClick={this.close}> Save</Button>
            </Modal.Footer>
        </Modal.Dialog>
        </Modal>
        </div>
    );
}
}

export default Treasure;