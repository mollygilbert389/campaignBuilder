import React, {Component} from 'react'
import Modal from 'react-bootstrap/Modal'
import {Button, Form, FormControl} from 'react-bootstrap'
import "./home.css"

class CampaignNameModal extends Component {

    constructor() {
        super();
        this.state ={
            showModal: true,
            value: ""
        }
    }

      close = (event) =>  {
          this.setState({
              showModal: false,
              value: event.target.value
            })
            let campaignName = this.state.value
            let newName = document.getElementById('campaignNameSpace')
            let cardName = document.getElementById('cardCampaignName')
            newName.textContent = "Campaign: " + campaignName
            cardName.textContent = "Campaign Name: " + campaignName
      }

      //handles the key stoke changes????
      handleChange = (event) => {
        this.setState({
            value: event.target.value
        })
      }
    
render() {  
    return (
        <div>
        <Modal 
        //to unhide once testing is done
        show={this.state.showModal}
        >
            <Modal.Header>
                <Modal.Title>Let's start with what you want your campaign to be named.</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <p>Enter your campaign name here. If you want one generated for you click here.</p>
                <Form inline>
                    <FormControl type="text" placeholder="Campaign Name" className="mr-sm-2" value={this.state.value} onChange={this.handleChange}/>
                    <div style={{paddingRight: "10px"}}>or</div> 
                    <Button variant="primary" >Generate</Button>
                </Form>
            </Modal.Body>

            <Modal.Footer>
                <Button variant="secondary" type="submit" value="Submit" onClick={this.close}>Save</Button>
            </Modal.Footer>
        </Modal>
        </div>
    );
}
}

export default CampaignNameModal;