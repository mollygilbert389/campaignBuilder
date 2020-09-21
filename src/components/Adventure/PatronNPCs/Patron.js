import React, {Component} from 'react'
import Modal from 'react-bootstrap/Modal'
import PatronCard from "./PatronCard"
import {Button, Dropdown, Form, FormControl, OverlayTrigger, Tooltip} from 'react-bootstrap'
import "../style.css"

class Patron extends Component {
    state ={
        showModal: false,
        patronName: "", 
    }

    close = (event) =>  {
        this.setState({
            showModal: false,
            patronName: event.target.value
        })
        this.props.setPatronName(this.state.patronName)
    }

    handleChange = (event) => {
        this.setState({
            patronName: event.target.value
        })
    }

    handleClick = () => {
        this.setState({
            showModal: !this.state.showModal,
        })
    }

render() {  

    const{patronType}=this.state

    return (
        <div>
            <div className="btns">
                <Button variant="outline-success" size="lg" onClick={this.handleClick}>Patron
                </Button>
            </div>
            <Modal size="lg" show={this.state.showModal} onHide={this.handleClick}>
                <Modal.Header closeButton>
                    <Modal.Title>Let's Create A Patron!</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>Below are some buttons to help create your patron.</p>
                    
                    <div className="d-flex flex-column align-items-center">
                        <Form inline>
                            <FormControl type="text" placeholder="Patron Name" className="mr-sm-2" value={this.state.value} onChange={this.handleChange}/>
                            <div style={{paddingRight: "10px"}}>or</div> 

                            <OverlayTrigger overlay={
                                <Tooltip>Coming Soon!</Tooltip>}>
                                <span className="d-inline-block">
                                    <Button variant="outline-primary" style={{ pointerEvents: 'none' }} disabled>Generate</Button>
                                </span>
                            </OverlayTrigger>
                        </Form>

                        <br></br>

                        <PatronCard 
                        campaign={this.props.campaign}
                        name={this.state.patronName}>
                        </PatronCard>

                    </div>

                </Modal.Body>

                <Modal.Footer>
                    <Button variant="outline-success" onClick={this.close} >Save</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}
}

export default Patron;