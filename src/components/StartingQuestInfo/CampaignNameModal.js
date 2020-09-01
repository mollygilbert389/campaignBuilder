import React, {Component} from 'react'
import Modal from 'react-bootstrap/Modal'
import {Button, Form, FormControl, OverlayTrigger, Tooltip} from 'react-bootstrap'
import "../home.css"

class CampaignNameModal extends Component {
    state ={
        showModal: true,
        campaignName: "",
        disabled: true,
    }

    close = () =>  {
        this.setState({
            showModal: false,
        })
        this.props.setCampaignName(this.state.campaignName)
    }

    handleClose = () => {
        this.setState({
            showModal: !this.state.showModal,
        })
    }

    handleChange = (event) => {
    this.setState({
        campaignName: event.target.value,
        disabled: false
    })
    }
    
render() {  
    return (
        <div>
            <div className="btns">
                <Button id="questGiver" variant="outline-success" size="lg" onClick={this.handleClose}>Campaign Name
                </Button>
            </div>
            <Modal show={this.state.showModal} onHide={this.handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Let's start with what you want your campaign to be named.</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <p>Enter your campaign name here. If you want one generated for you click here.</p>
                    <Form inline>
                        <FormControl type="text" placeholder="Campaign Name" className="mr-sm-2" value={this.state.value} onChange={this.handleChange}/>
                        <div style={{paddingRight: "10px"}}>or</div> 
                        
                        <OverlayTrigger overlay={
                        <Tooltip>Coming Soon!</Tooltip>}>
                        <span className="d-inline-block">
                        <Button 
                        variant="outline-primary"
                        style={{ pointerEvents: 'none' }} 
                        disabled>
                            Generate</Button>
                        </span>
                        </OverlayTrigger>

                    </Form>
                </Modal.Body>

                <Modal.Footer>
                    <Button 
                        variant={this.state.disabled ? "outline-success" : "success" }
                        type="submit" 
                        value="Submit" 
                        onClick={this.close} 
                        // disabled={this.state.campaignName ? false : true}
                        >
                            Save</Button>
                </Modal.Footer>
                
            </Modal>
        </div>
    );
}
}

export default CampaignNameModal;