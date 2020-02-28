import React, { Component } from 'react'
import {Form, Label, Input,FormGroup} from 'reactstrap'
import {Dropdown, Button} from 'react-bootstrap'
import '../style.css'

class PartyEightForm extends Component {
    render() {
        return (
            <div>
                 <div id="partyFormSixComp">
                    <div className="partyFormSpace">
                        <Form inline>
                            <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                                <Label for="exampleEmail" className="mr-sm-2">Party Member #1</Label>
                                <Input type="name" name="partyMemberOne" id="partyMemberOne" placeholder="Name" />
                            </FormGroup>
                            <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                            <Dropdown>
                                <Dropdown.Toggle variant="outline-success" id="dropdown-basic">
                                What is the class of this member?
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1">Barbarian</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Bard</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Cleric</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Druid</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Fighter</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Monk</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Paladin</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Ranger</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Rogue</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Sourcerer</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Warlock</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Wizard</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>

                            <div className="addSpace"></div>
                        <Dropdown>
                            <Dropdown.Toggle variant="outline-success" id="dropdown-basic">
                            What is the race of this member?
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">Barbarian</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Bard</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Cleric</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Druid</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Fighter</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Monk</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Paladin</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Ranger</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Rogue</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Sourcerer</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Warlock</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Wizard</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>

                            </FormGroup>
                            <Button variant="outline-primary">Save</Button>
                        </Form>
                    </div>

                    <div className="partyFormSpace">
                        <Form inline>
                            <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                                <Label for="exampleEmail" className="mr-sm-2">Party Member #2</Label>
                                <Input type="name" name="partyMemberOne" id="partyMemberOne" placeholder="Name" />
                            </FormGroup>
                            <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                            <Dropdown>
                                <Dropdown.Toggle variant="outline-success" id="dropdown-basic">
                                What is the class of this member?
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1">Barbarian</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Bard</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Cleric</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Druid</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Fighter</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Monk</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Paladin</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Ranger</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Rogue</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Sourcerer</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Warlock</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Wizard</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>

                            <div className="addSpace"></div>
                        <Dropdown>
                            <Dropdown.Toggle variant="outline-success" id="dropdown-basic">
                            What is the race of this member?
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">Barbarian</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Bard</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Cleric</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Druid</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Fighter</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Monk</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Paladin</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Ranger</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Rogue</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Sourcerer</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Warlock</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Wizard</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>

                            </FormGroup>
                            <Button variant="outline-primary">Save</Button>
                        </Form>
                    </div>

                    <div className="partyFormSpace">
                        <Form inline>
                            <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                                <Label for="exampleEmail" className="mr-sm-2">Party Member #3</Label>
                                <Input type="name" name="partyMemberOne" id="partyMemberOne" placeholder="Name" />
                            </FormGroup>
                            <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                            <Dropdown>
                                <Dropdown.Toggle variant="outline-success" id="dropdown-basic">
                                What is the class of this member?
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1">Barbarian</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Bard</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Cleric</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Druid</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Fighter</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Monk</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Paladin</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Ranger</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Rogue</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Sourcerer</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Warlock</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Wizard</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>

                            <div className="addSpace"></div>
                        <Dropdown>
                            <Dropdown.Toggle variant="outline-success" id="dropdown-basic">
                            What is the race of this member?
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">Barbarian</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Bard</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Cleric</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Druid</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Fighter</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Monk</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Paladin</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Ranger</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Rogue</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Sourcerer</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Warlock</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Wizard</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>

                            </FormGroup>
                            <Button variant="outline-primary">Save</Button>
                        </Form>
                    </div>

                    <div className="partyFormSpace">
                        <Form inline>
                            <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                                <Label for="exampleEmail" className="mr-sm-2">Party Member #4</Label>
                                <Input type="name" name="partyMemberOne" id="partyMemberOne" placeholder="Name" />
                            </FormGroup>
                            <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                            <Dropdown>
                                <Dropdown.Toggle variant="outline-success" id="dropdown-basic">
                                What is the class of this member?
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1">Barbarian</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Bard</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Cleric</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Druid</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Fighter</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Monk</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Paladin</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Ranger</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Rogue</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Sourcerer</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Warlock</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Wizard</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>

                            <div className="addSpace"></div>
                        <Dropdown>
                            <Dropdown.Toggle variant="outline-success" id="dropdown-basic">
                            What is the race of this member?
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">Barbarian</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Bard</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Cleric</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Druid</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Fighter</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Monk</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Paladin</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Ranger</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Rogue</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Sourcerer</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Warlock</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Wizard</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>

                            </FormGroup>
                            <Button variant="outline-primary">Save</Button>
                        </Form>
                    </div>

                    <div className="partyFormSpace">
                        <Form inline>
                            <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                                <Label for="exampleEmail" className="mr-sm-2">Party Member #5</Label>
                                <Input type="name" name="partyMemberOne" id="partyMemberOne" placeholder="Name" />
                            </FormGroup>
                            <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                            <Dropdown>
                                <Dropdown.Toggle variant="outline-success" id="dropdown-basic">
                                What is the class of this member?
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1">Barbarian</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Bard</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Cleric</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Druid</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Fighter</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Monk</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Paladin</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Ranger</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Rogue</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Sourcerer</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Warlock</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Wizard</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>

                            <div className="addSpace"></div>
                        <Dropdown>
                            <Dropdown.Toggle variant="outline-success" id="dropdown-basic">
                            What is the race of this member?
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">Barbarian</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Bard</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Cleric</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Druid</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Fighter</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Monk</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Paladin</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Ranger</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Rogue</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Sourcerer</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Warlock</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Wizard</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>

                            </FormGroup>
                            <Button variant="outline-primary">Save</Button>
                        </Form>
                    </div>

                    <div className="partyFormSpace">
                        <Form inline>
                            <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                                <Label for="exampleEmail" className="mr-sm-2">Party Member #6</Label>
                                <Input type="name" name="partyMemberOne" id="partyMemberOne" placeholder="Name" />
                            </FormGroup>
                            <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                            <Dropdown>
                                <Dropdown.Toggle variant="outline-success" id="dropdown-basic">
                                What is the class of this member?
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1">Barbarian</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Bard</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Cleric</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Druid</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Fighter</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Monk</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Paladin</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Ranger</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Rogue</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Sourcerer</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Warlock</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Wizard</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>

                            <div className="addSpace"></div>
                        <Dropdown>
                            <Dropdown.Toggle variant="outline-success" id="dropdown-basic">
                            What is the race of this member?
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">Barbarian</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Bard</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Cleric</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Druid</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Fighter</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Monk</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Paladin</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Ranger</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Rogue</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Sourcerer</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Warlock</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Wizard</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        
                            </FormGroup>
                            <Button variant="outline-primary">Save</Button>
                        </Form>
                    </div>

                    <div className="partyFormSpace">
                        <Form inline>
                            <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                                <Label for="exampleEmail" className="mr-sm-2">Party Member #7</Label>
                                <Input type="name" name="partyMemberOne" id="partyMemberOne" placeholder="Name" />
                            </FormGroup>
                            <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                            <Dropdown>
                                <Dropdown.Toggle variant="outline-success" id="dropdown-basic">
                                What is the class of this member?
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1">Barbarian</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Bard</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Cleric</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Druid</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Fighter</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Monk</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Paladin</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Ranger</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Rogue</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Sourcerer</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Warlock</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Wizard</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>

                            <div className="addSpace"></div>
                        <Dropdown>
                            <Dropdown.Toggle variant="outline-success" id="dropdown-basic">
                            What is the race of this member?
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">Barbarian</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Bard</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Cleric</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Druid</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Fighter</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Monk</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Paladin</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Ranger</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Rogue</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Sourcerer</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Warlock</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Wizard</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        
                            </FormGroup>
                            <Button variant="outline-primary">Save</Button>
                        </Form>
                    </div>

                     <div className="partyFormSpace">
                        <Form inline>
                            <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                                <Label for="exampleEmail" className="mr-sm-2">Party Member #8</Label>
                                <Input type="name" name="partyMemberOne" id="partyMemberOne" placeholder="Name" />
                            </FormGroup>
                            <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                            <Dropdown>
                                <Dropdown.Toggle variant="outline-success" id="dropdown-basic">
                                What is the class of this member?
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1">Barbarian</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Bard</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Cleric</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Druid</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Fighter</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Monk</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Paladin</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Ranger</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Rogue</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Sourcerer</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Warlock</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Wizard</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>

                            <div className="addSpace"></div>
                        <Dropdown>
                            <Dropdown.Toggle variant="outline-success" id="dropdown-basic">
                            What is the race of this member?
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">Barbarian</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Bard</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Cleric</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Druid</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Fighter</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Monk</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Paladin</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Ranger</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Rogue</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Sourcerer</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Warlock</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Wizard</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        
                            </FormGroup>
                            <Button variant="outline-primary">Save</Button>
                        </Form>
                    </div>

                </div>
            </div>
        )
    }
}

export default PartyEightForm