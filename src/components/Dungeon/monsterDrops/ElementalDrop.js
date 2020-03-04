import React, { Component } from 'react'
import {Dropdown} from 'react-bootstrap'

export default class ElementalDrop extends Component {
    render() {
        return (
            <div>
                <Dropdown>
                    <Dropdown.Toggle variant="outline-primary">
                        Monster Type
                    </Dropdown.Toggle>
                    <Dropdown.Menu id="aberrationMonsters">
                    <Dropdown.Item >Air Elemental</Dropdown.Item>
                    <Dropdown.Item >Azer</Dropdown.Item>
                    <Dropdown.Item >Dust Mephit</Dropdown.Item>
                    <Dropdown.Item >Earth Elemental</Dropdown.Item>
                    <Dropdown.Item >Efreeti</Dropdown.Item>
                    <Dropdown.Item >Tempest</Dropdown.Item>
                    <Dropdown.Item >Fire Elemental</Dropdown.Item>
                    <Dropdown.Item >Fire Snake</Dropdown.Item>
                    <Dropdown.Item >Flail Snail</Dropdown.Item>
                    <Dropdown.Item >Frost Salamander</Dropdown.Item>
                    <Dropdown.Item >Gargoyle</Dropdown.Item>
                    <Dropdown.Item >Ice Mephit</Dropdown.Item>
                    <Dropdown.Item >Imix</Dropdown.Item>
                    <Dropdown.Item >Invisible Stalker</Dropdown.Item>
                    <Dropdown.Item >Leviathan</Dropdown.Item>
                    <Dropdown.Item >Marid</Dropdown.Item>
                    <Dropdown.Item >Phoenix</Dropdown.Item>
                    <Dropdown.Item >Steam Mephit</Dropdown.Item>
                    <Dropdown.Item >Water Elemental</Dropdown.Item>
                    <Dropdown.Item >Water Weird</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </div>
        )
    }
}
