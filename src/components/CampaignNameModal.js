import React, {Component} from 'react'
import Modal from 'react-bootstrap/Modal'
import {Button, Form, FormControl} from 'react-bootstrap'
import "./home.css"

class CampaignNameModal extends Component {

    constructor() {
        super();
        this.state ={
            showModal: true,
            campaignName: "",
        }
    }

      close = (event) =>  {
            this.setState({
                showModal: false,
                // campaignName: event.target.value
            })

            this.props.setCampaignName(this.state.campaignName)

            // let campaignName = this.state.value
            // let newName = document.getElementById('campaignNameSpace')
            // let cardName = document.getElementById('cardCampaignName')
            // newName.textContent = "Campaign: " + campaignName
            // cardName.textContent = "Campaign Name: " + campaignName
      }

      handleChange = (event) => {
        this.setState({
            campaignName: event.target.value
        })
      }
    
render() {  
    return (
        <div>
        <Modal 
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
                    <Button variant="outline-primary">Generate</Button>
                </Form>
            </Modal.Body>

            <Modal.Footer>
                <Button variant="outline-success" type="submit" value="Submit" onClick={this.close}>Save</Button>
            </Modal.Footer>
        </Modal>
        </div>
    );
}
}

export default CampaignNameModal;