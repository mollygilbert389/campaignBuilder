import React, { Component } from 'react'
import {Dropdown} from 'react-bootstrap'

export default class UndeadDrop extends Component {
    render() {
        return (
            <div>
                <Dropdown>
                    <Dropdown.Toggle variant="outline-primary">
                        Monster Type
                    </Dropdown.Toggle>
                    <Dropdown.Menu id="aberrationMonsters">
                    <Dropdown.Item >Banshee</Dropdown.Item>
                    <Dropdown.Item >Flameskull</Dropdown.Item>
                    <Dropdown.Item >Ghast</Dropdown.Item>
                    <Dropdown.Item >Ghost</Dropdown.Item>
                    <Dropdown.Item >Ghoul</Dropdown.Item>
                    <Dropdown.Item >Lich</Dropdown.Item>
                    <Dropdown.Item >Minotaur Skeleton</Dropdown.Item>
                    <Dropdown.Item >Mummy</Dropdown.Item>
                    <Dropdown.Item >Mummy Lord</Dropdown.Item>
                    <Dropdown.Item >Orgre Zombie</Dropdown.Item>
                    <Dropdown.Item >Shadow</Dropdown.Item>
                    <Dropdown.Item >Skeleton</Dropdown.Item>
                    <Dropdown.Item >Specter</Dropdown.Item>
                    <Dropdown.Item >Vampire</Dropdown.Item>
                    <Dropdown.Item >Warhorse Skeleton</Dropdown.Item>
                    <Dropdown.Item >Wight</Dropdown.Item>
                    <Dropdown.Item >Will-O-Wisp</Dropdown.Item>
                    <Dropdown.Item >Wraith</Dropdown.Item>
                    <Dropdown.Item >Zombie</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </div>
        )
    }
}
