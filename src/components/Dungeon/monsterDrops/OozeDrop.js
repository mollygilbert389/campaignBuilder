import React, { Component } from 'react'
import {Dropdown} from 'react-bootstrap'

export default class OozeDrop extends Component {
    render() {
        return (
            <div>
                <Dropdown>
                    <Dropdown.Toggle variant="outline-primary">
                        Monster Type
                    </Dropdown.Toggle>
                    <Dropdown.Menu id="aberrationMonsters">
                    <Dropdown.Item >Black Pudding</Dropdown.Item>
                    <Dropdown.Item >Gelatinous Cube</Dropdown.Item>
                    <Dropdown.Item >Gray Ooze</Dropdown.Item>
                    <Dropdown.Item >Ochre Jelly</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </div>
        )
    }
}
