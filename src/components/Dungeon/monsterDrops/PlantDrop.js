import React, { Component } from 'react'
import {Dropdown} from 'react-bootstrap'

export default class PlantDrop extends Component {
    render() {
        return (
            <div>
                <Dropdown>
                    <Dropdown.Toggle variant="outline-primary">
                        Monster Type
                    </Dropdown.Toggle>
                    <Dropdown.Menu id="aberrationMonsters">
                    <Dropdown.Item >Awakened Shrub</Dropdown.Item>
                    <Dropdown.Item >Awakened Tree</Dropdown.Item>
                    <Dropdown.Item >Shambling Mound</Dropdown.Item>
                    <Dropdown.Item >Shrieker</Dropdown.Item>
                    <Dropdown.Item >Treant</Dropdown.Item>
                    <Dropdown.Item >Twig Blight</Dropdown.Item>
                    <Dropdown.Item >Violet Fungus</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </div>
        )
    }
}
