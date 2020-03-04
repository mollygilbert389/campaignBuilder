import React, { Component } from 'react'
import {Dropdown} from 'react-bootstrap'

class AberrationDrop extends Component {
    render() {
        return (
            <div>
                <Dropdown>
                    <Dropdown.Toggle variant="outline-primary">
                        Monster Type
                    </Dropdown.Toggle>
                    <Dropdown.Menu id="aberrationMonsters">
                    <Dropdown.Item >Aboleth</Dropdown.Item>
                    <Dropdown.Item >Beholder</Dropdown.Item>
                    <Dropdown.Item >Berbalang</Dropdown.Item>
                    <Dropdown.Item >Blue Slaad</Dropdown.Item>
                    <Dropdown.Item >Chocker</Dropdown.Item>
                    <Dropdown.Item >Chaos Quadrapod</Dropdown.Item>
                    <Dropdown.Item >Cloacker</Dropdown.Item>
                    <Dropdown.Item >Death Kiss</Dropdown.Item>
                    <Dropdown.Item >Elder Brain</Dropdown.Item>
                    <Dropdown.Item >Mind Flayer</Dropdown.Item>
                    <Dropdown.Item >Morkoth</Dropdown.Item>
                    <Dropdown.Item >Nothic</Dropdown.Item>
                    <Dropdown.Item >Shadow Horror</Dropdown.Item>
                    <Dropdown.Item >Skum</Dropdown.Item>
                    <Dropdown.Item >Spectator</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </div>
        )
    }
}

export default AberrationDrop

