import React, { Component } from 'react'
import {Dropdown} from 'react-bootstrap'

export default class DragonDrop extends Component {
    render() {
        return (
            <div>
                <Dropdown>
                    <Dropdown.Toggle variant="outline-primary">
                        Monster Type
                    </Dropdown.Toggle>
                    <Dropdown.Menu id="aberrationMonsters">
                    <Dropdown.Item >Adult Dragon</Dropdown.Item>
                    <Dropdown.Item >Ancient Dragon</Dropdown.Item>
                    <Dropdown.Item >Astyrranthor</Dropdown.Item>
                    <Dropdown.Item >Guard Drake</Dropdown.Item>
                    <Dropdown.Item >Dragon Wyrmling</Dropdown.Item>
                    <Dropdown.Item >Dragon Turtle</Dropdown.Item>
                    <Dropdown.Item >Faerie Dragon</Dropdown.Item>
                    <Dropdown.Item >Itmrith</Dropdown.Item>
                    <Dropdown.Item >Pseudodragon</Dropdown.Item>
                    <Dropdown.Item >Young Dragon</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </div>
        )
    }
}
