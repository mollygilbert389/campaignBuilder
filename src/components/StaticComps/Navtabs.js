import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, Nav, ProgressBar} from 'react-bootstrap'
import {connect} from "react-redux"

function Navtabs(props) {
    return (
        <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">{'D&D'} Campaign Maker</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/home">Home</Nav.Link>
        </Nav>

          

        <Nav>
          <Nav.Link>
              {props.campaign.campaignName}
            </Nav.Link>
        </Nav>
      </Navbar>
    )
}

const mapStateToProps = (state) => {
  return {campaign: state.campaignReducer}
}


export default connect(mapStateToProps, null)(Navtabs);