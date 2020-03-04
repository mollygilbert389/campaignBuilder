import React, { Component } from 'react'
import {Dropdown} from 'react-bootstrap'

export default class BeastDrop extends Component {
    render() {
        return (
            <div>
                <Dropdown>
                    <Dropdown.Toggle variant="outline-primary">
                        Monster Type
                    </Dropdown.Toggle>
                    <Dropdown.Menu id="aberrationMonsters">
                    <Dropdown.Item >Monkey</Dropdown.Item>
                    <Dropdown.Item >Badger</Dropdown.Item>
                    <Dropdown.Item >Bat Swarm</Dropdown.Item>
                    <Dropdown.Item >Bear</Dropdown.Item>
                    <Dropdown.Item >Blood Hawk</Dropdown.Item>
                    <Dropdown.Item >Boar</Dropdown.Item>
                    <Dropdown.Item >Large Cat</Dropdown.Item>
                    <Dropdown.Item >Cow herd</Dropdown.Item>
                    <Dropdown.Item >Deep Rothe</Dropdown.Item>
                    <Dropdown.Item >Deer Herd</Dropdown.Item>
                    <Dropdown.Item >Wolf Pack</Dropdown.Item>
                    <Dropdown.Item >Horse Herd</Dropdown.Item>
                    <Dropdown.Item >Enrourmous Tentacle</Dropdown.Item>
                    <Dropdown.Item >Giant Snake</Dropdown.Item>
                    <Dropdown.Item >Giant Fly</Dropdown.Item>
                    <Dropdown.Item >Owlbear</Dropdown.Item>
                    <Dropdown.Item >Giant Crab</Dropdown.Item>
                    <Dropdown.Item >Giant Scorpion</Dropdown.Item>
                    <Dropdown.Item >Giant Spider</Dropdown.Item>
                    <Dropdown.Item >Giant Snapping Turtle</Dropdown.Item>
                    <Dropdown.Item >Giant Wasp</Dropdown.Item>
                    <Dropdown.Item >Guthash</Dropdown.Item>
                    <Dropdown.Item >Mammoth</Dropdown.Item>
                    <Dropdown.Item >Snarl</Dropdown.Item>
                    <Dropdown.Item >Swarm of Insects</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </div>
        )
    }
}
