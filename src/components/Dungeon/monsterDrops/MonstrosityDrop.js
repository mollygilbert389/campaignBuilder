import React, { Component } from 'react'
import {Dropdown} from 'react-bootstrap'

export default class MonstrosityDrop extends Component {
    render() {
        return (
            <div>
                <Dropdown>
                    <Dropdown.Toggle variant="outline-primary">
                        Monster Type
                    </Dropdown.Toggle>
                    <Dropdown.Menu id="aberrationMonsters">
                    <Dropdown.Item >Androsphinx</Dropdown.Item>
                    <Dropdown.Item >Ankheg</Dropdown.Item>
                    <Dropdown.Item >Basilisk</Dropdown.Item>
                    <Dropdown.Item >Behir</Dropdown.Item>
                    <Dropdown.Item >Bulette</Dropdown.Item>
                    <Dropdown.Item >Centaur</Dropdown.Item>
                    <Dropdown.Item >Chimera</Dropdown.Item>
                    <Dropdown.Item >Cockatrice</Dropdown.Item>
                    <Dropdown.Item >Darkmantle</Dropdown.Item>
                    <Dropdown.Item >Death Dog</Dropdown.Item>
                    <Dropdown.Item >Doppelganger</Dropdown.Item>
                    <Dropdown.Item >Drider</Dropdown.Item>
                    <Dropdown.Item >Ettercap</Dropdown.Item>
                    <Dropdown.Item >Grick</Dropdown.Item>
                    <Dropdown.Item >Griffon</Dropdown.Item>
                    <Dropdown.Item >Guardian Naga</Dropdown.Item>
                    <Dropdown.Item >Gynosphinx</Dropdown.Item>
                    <Dropdown.Item >Harpy</Dropdown.Item>
                    <Dropdown.Item >Hippogriff</Dropdown.Item>
                    <Dropdown.Item >Hydra</Dropdown.Item>
                    <Dropdown.Item >Kraken</Dropdown.Item>
                    <Dropdown.Item >Lamia</Dropdown.Item>
                    <Dropdown.Item >Manticore</Dropdown.Item>
                    <Dropdown.Item >Medusa</Dropdown.Item>
                    <Dropdown.Item >Merrow</Dropdown.Item>
                    <Dropdown.Item >Mimic</Dropdown.Item>
                    <Dropdown.Item >Minotaur</Dropdown.Item>
                    <Dropdown.Item >Owlbear</Dropdown.Item>
                    <Dropdown.Item >Phase Spider</Dropdown.Item>
                    <Dropdown.Item >Rust Monster</Dropdown.Item>
                    <Dropdown.Item >Spirit Naga</Dropdown.Item>
                    <Dropdown.Item >Tarrasque</Dropdown.Item>
                    <Dropdown.Item >Winter Wolf</Dropdown.Item>
                    <Dropdown.Item >Worg</Dropdown.Item>
                    <Dropdown.Item >Yeti</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </div>
        )
    }
}
