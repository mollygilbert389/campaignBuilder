import React, { Component } from 'react'
import {Dropdown} from 'react-bootstrap'

export default class FiendDrop extends Component {
    render() {
        return (
            <div>
                <Dropdown>
                    <Dropdown.Toggle variant="outline-primary">
                        Monster Type
                    </Dropdown.Toggle>
                    <Dropdown.Menu id="aberrationMonsters">
                    <Dropdown.Item >Abyssal Chicken</Dropdown.Item>
                    <Dropdown.Item >Arcanaloth</Dropdown.Item>
                    <Dropdown.Item >Bael</Dropdown.Item>
                    <Dropdown.Item >Balor</Dropdown.Item>
                    <Dropdown.Item >Barbed Devil</Dropdown.Item>
                    <Dropdown.Item >Bone Devil</Dropdown.Item>
                    <Dropdown.Item >Cackler</Dropdown.Item>
                    <Dropdown.Item >Cambion</Dropdown.Item>
                    <Dropdown.Item >Demogorgon</Dropdown.Item>
                    <Dropdown.Item >Devourer</Dropdown.Item>
                    <Dropdown.Item >Erinyes</Dropdown.Item>
                    <Dropdown.Item >Hell Hound</Dropdown.Item>
                    <Dropdown.Item >Ice Devil</Dropdown.Item>
                    <Dropdown.Item >Imp</Dropdown.Item>
                    <Dropdown.Item >Incubus</Dropdown.Item>
                    <Dropdown.Item >Nightmare</Dropdown.Item>
                    <Dropdown.Item >Succubus</Dropdown.Item>
                    <Dropdown.Item >Vrock</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </div>
        )
    }
}
