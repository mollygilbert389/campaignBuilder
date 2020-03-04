import React, { Component } from 'react'
import {Dropdown} from 'react-bootstrap'

export default class ConstructDrop extends Component {
    render() {
        return (
            <div>
                <Dropdown>
                    <Dropdown.Toggle variant="outline-primary">
                        Monster Type
                    </Dropdown.Toggle>
                    <Dropdown.Menu id="aberrationMonsters">
                    <Dropdown.Item >Animated Armor</Dropdown.Item>
                    <Dropdown.Item >Animated Statue</Dropdown.Item>
                    <Dropdown.Item >Braim in Iron</Dropdown.Item>
                    <Dropdown.Item >Cadaver Collector</Dropdown.Item>
                    <Dropdown.Item >Clay Gladiator</Dropdown.Item>
                    <Dropdown.Item >Clay Golem</Dropdown.Item>
                    <Dropdown.Item >Clockwork Dragon</Dropdown.Item>
                    <Dropdown.Item >Crystal Golem</Dropdown.Item>
                    <Dropdown.Item >Flying Sword</Dropdown.Item>
                    <Dropdown.Item >Guardian Portrait</Dropdown.Item>
                    <Dropdown.Item >Hellfire Engine</Dropdown.Item>
                    <Dropdown.Item >Homunculus</Dropdown.Item>
                    <Dropdown.Item >Iron Cobra</Dropdown.Item>
                    <Dropdown.Item >Jade Spider</Dropdown.Item>
                    <Dropdown.Item >Keg Robot</Dropdown.Item>
                    <Dropdown.Item >Rug of Smothering</Dropdown.Item>
                    <Dropdown.Item >Skull Flier</Dropdown.Item>
                    <Dropdown.Item >Warforaged Titan</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </div>
        )
    }
}
