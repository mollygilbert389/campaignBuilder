import React, {Component} from 'react'
import Modal from 'react-bootstrap/Modal'
import {Button, Dropdown, Form, FormControl} from 'react-bootstrap'
import "./style.css"

class VillianModal extends Component {

    constructor() {
        super();
        this.state ={
            showModal: false,
            villianName: "",
            villianType: ""
        }
    }

      close = (event) =>  {
          this.setState({
              showModal: false,
              villianName: event.target.value
            })

            this.props.setVillian(this.state.villianName, this.state.villianType)
      }

      handleChange = (event) => {
        this.setState({
            villianName: event.target.value
        })
      }

        handleClick = () => {
            this.setState({
                showModal: !this.state.showModal,
                })
        }

        villianChoice = (choice) => {
            // if (this.state.type = "") {
            //     let villianType = document.getElementById('villianType')
            //     villianType.innerText = "Villian Type"
            // } else {
            //     let villianType = document.getElementById('villianType')
            //     villianType.innerText = choice.target.text
            // }

            this.setState({
                villianType: choice.target.text
            })
        }

render() {  

    return (
        <div>
        <div className="btns">
        <Button id="villian" variant="outline-success" size="lg" onClick={this.handleClick}>Villian
        </Button>
            </div>
        <Modal show={this.state.showModal}>
        <Modal.Dialog>
            <Modal.Header>
                <Modal.Title>Let's Create Yor Villian!</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <p>Below are some buttons to create your villian</p>

                <Form inline>
                    <FormControl type="text" placeholder="Villian Name" className="mr-sm-2" value={this.state.value} onChange={this.handleChange}/>
                    <div style={{paddingRight: "10px"}}>or</div> 
                    <Button variant="outline-primary" >Generate</Button>
                </Form>
                <br></br>

                <Dropdown>
                    <Dropdown.Toggle variant="outline-primary" id="villianType">
                    Villian Type
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                    <Dropdown.Item onClick={this.villianChoice}>Human</Dropdown.Item>
                    <Dropdown.Item onClick={this.villianChoice}>Hag</Dropdown.Item>
                    <Dropdown.Item onClick={this.villianChoice}>Abyssal Chicken</Dropdown.Item>
                    <Dropdown.Item onClick={this.villianChoice}>Alcolyte</Dropdown.Item>
                    <Dropdown.Item onClick={this.villianChoice}>Elemental</Dropdown.Item>
                    <Dropdown.Item onClick={this.villianChoice}>Dwarf</Dropdown.Item>
                    <Dropdown.Item onClick={this.villianChoice}>Cult</Dropdown.Item>
                    <Dropdown.Item onClick={this.villianChoice}>Animal</Dropdown.Item>
                    <Dropdown.Item onClick={this.villianChoice}>Banshee</Dropdown.Item>
                    <Dropdown.Item onClick={this.villianChoice}>Ghost</Dropdown.Item>
                    <Dropdown.Item onClick={this.villianChoice}>Zombie</Dropdown.Item>
                    <Dropdown.Item onClick={this.villianChoice}>Assasin</Dropdown.Item>
                    <Dropdown.Item onClick={this.villianChoice}>Giant</Dropdown.Item>
                    <Dropdown.Item onClick={this.villianChoice}>Wizard</Dropdown.Item>
                    <Dropdown.Item onClick={this.villianChoice}>Demogorgan</Dropdown.Item>
                    <Dropdown.Item onClick={this.villianChoice}>Dragon</Dropdown.Item>
                    <Dropdown.Item onClick={this.villianChoice}>God</Dropdown.Item>
                    <Dropdown.Item onClick={this.villianChoice}>Something else</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>


            </Modal.Body>

            <Modal.Footer>
                <Button variant="outline-success" onClick={this.close} >Save</Button>
            </Modal.Footer>
        </Modal.Dialog>
        </Modal>
        </div>
    );
}
}

export default VillianModal;