import React, { Component } from 'react'
import {Dropdown} from 'react-bootstrap'

export default class GiantDrop extends Component {
    render() {
        return (
            <div>
                <Dropdown>
                    <Dropdown.Toggle variant="outline-primary">
                        Monster Type
                    </Dropdown.Toggle>
                    <Dropdown.Menu id="aberrationMonsters">
                    <Dropdown.Item >Cloud Giant</Dropdown.Item>
                    <Dropdown.Item >Cyclops</Dropdown.Item>
                    <Dropdown.Item >Ettin</Dropdown.Item>
                    <Dropdown.Item >Fire Giant</Dropdown.Item>
                    <Dropdown.Item >Frost Giant</Dropdown.Item>
                    <Dropdown.Item >Hill Giant</Dropdown.Item>
                    <Dropdown.Item >Ogre</Dropdown.Item>
                    <Dropdown.Item >Oni</Dropdown.Item>
                    <Dropdown.Item >Stone Giant</Dropdown.Item>
                    <Dropdown.Item >Storm Giant</Dropdown.Item>
                    <Dropdown.Item >Troll</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </div>
        )
    }
}
