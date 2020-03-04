import React, { Component } from 'react'
import {Dropdown} from 'react-bootstrap'

export default class FeyDrop extends Component {
    render() {
        return (
            <div>
                <Dropdown>
                    <Dropdown.Toggle variant="outline-primary">
                        Monster Type
                    </Dropdown.Toggle>
                    <Dropdown.Menu id="aberrationMonsters">
                    <Dropdown.Item >Autumn Eladrin</Dropdown.Item>
                    <Dropdown.Item >Blink Dog</Dropdown.Item>
                    <Dropdown.Item >Boggle</Dropdown.Item>
                    <Dropdown.Item >Conclave Dryad</Dropdown.Item>
                    <Dropdown.Item >Darkling Elder</Dropdown.Item>
                    <Dropdown.Item >Dusk Hag</Dropdown.Item>
                    <Dropdown.Item >Mite</Dropdown.Item>
                    <Dropdown.Item >Pixie</Dropdown.Item>
                    <Dropdown.Item >Quickling</Dropdown.Item>
                    <Dropdown.Item >Satyr</Dropdown.Item>
                    <Dropdown.Item >Siren</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </div>
        )
    }
}
