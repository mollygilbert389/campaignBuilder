import React, { Component } from 'react'
import {Dropdown} from 'react-bootstrap'

export default class HumanoidDrop extends Component {
    render() {
        return (
            <div>
                <Dropdown>
                    <Dropdown.Toggle variant="outline-primary">
                        Monster Type
                    </Dropdown.Toggle>
                    <Dropdown.Menu id="aberrationMonsters">
                    <Dropdown.Item >Acolyte</Dropdown.Item>
                    <Dropdown.Item >Archmage</Dropdown.Item>
                    <Dropdown.Item >Assasin</Dropdown.Item>
                    <Dropdown.Item >Bandit</Dropdown.Item>
                    <Dropdown.Item >Bandit Captain</Dropdown.Item>
                    <Dropdown.Item >Berserker</Dropdown.Item>
                    <Dropdown.Item >Bugbear</Dropdown.Item>
                    <Dropdown.Item >Commoner</Dropdown.Item>
                    <Dropdown.Item >Cultist</Dropdown.Item>
                    <Dropdown.Item >Deeo Gnome</Dropdown.Item>
                    <Dropdown.Item >Drow</Dropdown.Item>
                    <Dropdown.Item >Druid</Dropdown.Item>
                    <Dropdown.Item >Duergar</Dropdown.Item>
                    <Dropdown.Item >Gladiator</Dropdown.Item>
                    <Dropdown.Item >Gnoll</Dropdown.Item>
                    <Dropdown.Item >Goblin</Dropdown.Item>
                    <Dropdown.Item >Grimlock</Dropdown.Item>
                    <Dropdown.Item >Guard</Dropdown.Item>
                    <Dropdown.Item >Hobgoblin</Dropdown.Item>
                    <Dropdown.Item >Knight</Dropdown.Item>
                    <Dropdown.Item >Kobold</Dropdown.Item>
                    <Dropdown.Item >Lizardfolk</Dropdown.Item>
                    <Dropdown.Item >Mage</Dropdown.Item>
                    <Dropdown.Item >Merfolk</Dropdown.Item>
                    <Dropdown.Item >Orc</Dropdown.Item>
                    <Dropdown.Item >Priest</Dropdown.Item>
                    <Dropdown.Item >Scout</Dropdown.Item>
                    <Dropdown.Item >Spy</Dropdown.Item>
                    <Dropdown.Item >Thug</Dropdown.Item>
                    <Dropdown.Item >Warrior</Dropdown.Item>
                    <Dropdown.Item >Veteran</Dropdown.Item>
                    <Dropdown.Item >Werebear</Dropdown.Item>
                    <Dropdown.Item >Wererat</Dropdown.Item>
                    <Dropdown.Item >Werewolf</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </div>
        )
    }
}
