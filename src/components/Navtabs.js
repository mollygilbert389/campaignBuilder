import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, Nav} from 'react-bootstrap'

function Navtabs() {
    return (
        <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">D&D Campaign Maker</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/home">Home</Nav.Link>
        </Nav>

        <Nav>
          <Nav.Link>
            <div id="campaignNameSpace">
            </div>
            </Nav.Link>
        </Nav>
      </Navbar>
    )
}

export default Navtabs;
