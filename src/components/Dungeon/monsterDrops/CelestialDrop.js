import React, { Component } from 'react'
import {Dropdown} from 'react-bootstrap'

export default class CelestialDrop extends Component {
    render() {
        return (
            <div>
                <Dropdown>
                    <Dropdown.Toggle variant="outline-primary">
                        Monster Type
                    </Dropdown.Toggle>
                    <Dropdown.Menu id="aberrationMonsters">
                    <Dropdown.Item >Aurelia</Dropdown.Item>
                    <Dropdown.Item >Battleforce Angel</Dropdown.Item>
                    <Dropdown.Item >Deva</Dropdown.Item>
                    <Dropdown.Item >Empyrean</Dropdown.Item>
                    <Dropdown.Item >Hollyphant</Dropdown.Item>
                    <Dropdown.Item >Pegasus</Dropdown.Item>
                    <Dropdown.Item >Plantar</Dropdown.Item>
                    <Dropdown.Item >Radiant Idol</Dropdown.Item>
                    <Dropdown.Item >Solar</Dropdown.Item>
                    <Dropdown.Item >Unicorn</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </div>
        )
    }
}
