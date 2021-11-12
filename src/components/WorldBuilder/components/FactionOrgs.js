import React, {Component} from 'react'
import Modal from 'react-bootstrap/Modal'
import {Button, ButtonGroup, OverlayTrigger, Tooltip} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBeer, faGem, faCrown, faDragon, faHatWizard, faShieldAlt, faChessKnight, faAnchor, faAnkh, faArchway, faBalanceScaleLeft, faAtlas, faAtom, faBook, faBookDead, faBookMedical, faCross, faDiceD20, faDollarSign, faDotCircle, faDove, faDraftingCompass, faEye, faFire, faFish, faGlassCheers, faHollyBerry, faHorse, faHourglassHalf, faLandmark, faOm, faRebel, faPallet, faPaw, faPenNib, faPlaceOfWorship, faSkull, faSpider, faStarOfDavid, faStar, faVihara} from '@fortawesome/free-solid-svg-icons'
import "../style.css"

class FactionOrgs extends Component {
    state ={
        value: "",
        showMiniModal: false,
        currentBtnId: null,
        suggestedTags: [
            {id: 1, name: "Harpers", icon:faBeer},
            {id: 2, name: "Order of the Guantlet", icon:faShieldAlt},
            {id: 3, name: "Emerald Enclave", icon:faGem},
            {id: 4, name: "Lord's Alliance", icon:faCrown},
            {id: 5, name: "Zhentarim", icon:faDragon},
        ],
        icons: [
            {id: 1, icon:faBeer}, 
            {id: 2, icon:faGem}, 
            {id: 3, icon:faCrown}, 
            {id: 4, icon:faDragon}, 
            {id: 5, icon:faHatWizard}, 
            {id: 6, icon:faShieldAlt}, 
            {id: 7, icon:faChessKnight}, 
            {id: 8, icon:faAnchor}, 
            {id: 9, icon:faAnkh}, 
            {id: 10, icon:faArchway},
            {id: 11, icon:faBalanceScaleLeft},
            {id: 12, icon:faAtlas}, 
            {id: 13, icon:faAtom}, 
            {id: 14, icon:faBook}, 
            {id: 15, icon:faBookDead}, 
            {id: 16, icon:faBookMedical}, 
            {id: 17, icon:faCross}, 
            {id: 18, icon:faDiceD20}, 
            {id: 19, icon:faDollarSign}, 
            {id: 20, icon:faDotCircle}, 
            {id: 21, icon:faDove}, 
            {id: 22, icon:faDraftingCompass}, 
            {id: 23, icon:faEye}, 
            {id: 24, icon:faFire}, 
            {id: 25, icon:faFish}, 
            {id: 26, icon:faGlassCheers}, 
            {id: 27, icon:faHollyBerry}, 
            {id: 28, icon:faHorse}, 
            {id: 29, icon:faHourglassHalf}, 
            {id: 30, icon:faLandmark}, 
            {id: 31, icon:faOm}, 
            {id: 32, icon:faPallet}, 
            {id: 33, icon:faPaw}, 
            {id: 34, icon:faPenNib}, 
            {id: 35, icon:faPlaceOfWorship}, 
            {id: 36, icon:faSkull}, 
            {id: 37, icon:faSpider}, 
            {id: 38, icon:faStarOfDavid}, 
            {id: 39, icon:faStar}, 
            {id: 40, icon:faVihara}
        ]

    }

    handleClick = () => {
        this.setState({
            showModal: !this.state.showModal,
        })
    }

    handleRemove = (event) => {
        let removedItem = event.target.name
        let currentTags = this.state.suggestedTags
        const removedFaction = currentTags.filter(item => item.name !== removedItem)
        this.setState({
            suggestedTags: removedFaction
        })
        console.log(removedFaction)
    }

    handleAddFaction = (event) => {
        let currentTags = this.state.suggestedTags
        let newName = this.state.value
        let id = currentTags.length + 1
        let icon = faDiceD20

        const updatedFactions = [...currentTags, {id: id, name: newName, icon:icon}]

        console.log(updatedFactions)

        this.setState({
            suggestedTags: updatedFactions,
            value: '',
        })
    }

    handleInputChange = (event) => {
        this.setState({
            value: event.target.value
        });
    }

    onKeyDown = (event) => {
        if (event.key === "Enter") {
            this.handleAddFaction();
          }
    }

    handleSave = () => {
        this.setState({
            showModal: !this.state.showModal,
        }, () => this.props.setFactionOrgs(this.state.suggestedTags))
        
        this.props.setFactionShow("factionShow", true)
    }

    handleIconSelect = (event) => {
        const btnId = event.target.id 

        this.setState({
            showMiniModal: !this.state.showMiniModal,
            currentBtnId: btnId 
        }, () => console.log(this.state.currentBtnId))
    }

    handleMiniModalClose = () => {
        this.setState({
            showMiniModal: !this.state.showMiniModal,
            
        })
    }

    hanleIconFinalSelection = (event) => {
        const btnId = parseInt(this.state.currentBtnId)

        const iconId = event.target.id

        const updatedIcon = this.state.icons.filter(item => item.id == iconId)
        const finalIcon = updatedIcon[0].icon
        
        const factionIcons = [...this.state.suggestedTags].map(item => {
            if (item.id===btnId) {
                return {...item, icon:finalIcon}
            } return item
        })

        this.setState({
            suggestedTags: factionIcons,
            showMiniModal: !this.state.showMiniModal,
        })

    }


render() {  
    const{other} = this.state
    return (
        <div>
            <div className="btns">
                <Button variant="outline-success" size="lg" onClick={this.handleClick}>Factions and Organizations
                </Button>
            </div>
            <Modal 
            size="lg" show={this.state.showModal} 
            onHide={this.handleClick} 
            enforceFocus={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Let's add some organizations to your world.</Modal.Title>
                </Modal.Header>
                <Modal.Body className="d-flex flex-column align-items-center">
                    <p>We have a few factions and organizations suggestions. Feel free to add and remove as many or as little as you want.</p>

                    <br></br>

                    <div className="tagsArea centeredItems">
                    {this.state.suggestedTags.map((item, index) => {
                        return <ButtonGroup className="factionButtons">
                        
                        <OverlayTrigger
                        placement="left"
                        overlay={
                            <Tooltip>
                                Change Me!
                            </Tooltip>
                            }
                        >
                            <Button id={item.id} onClick={this.handleIconSelect}>
                                <FontAwesomeIcon className="iconImage" icon={item.icon}></FontAwesomeIcon>
                            </Button>
                        </OverlayTrigger>


                            <Button className="iconImage" name={item.name}>{item.name}</Button>
                            <Button name={item.name} onClick={this.handleRemove}>X</Button>
                            </ButtonGroup>
                        })}

                            <Modal
                            size="sm"
                            aria-labelledby="example-modal-sizes-title-sm"
                            show={this.state.showMiniModal} 
                            onHide={this.handleMiniModalClose}
                            >
                                <Modal.Header closeButton>
                                    <Modal.Title>Choose your Icon</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <div className="wrapIcons">
                                        {this.state.icons.map(icon => {return <Button 
                                        className="icons"
                                        id={icon.id}
                                        iconObject={icon.icon}
                                        onClick={this.hanleIconFinalSelection}
                                        >
                                            <FontAwesomeIcon className="iconImage" icon={icon.icon}></FontAwesomeIcon>
                                        </Button>
                                    })}
                                    </div>
                                </Modal.Body>
                            </Modal>

                        
                        <div className="inputAndBtn factionButtons">
                            <input className="factionInput" placeholder="Add Faction or Organization Here" type="text" value={this.state.value} onChange={this.handleInputChange} onKeyUp={(event) => this.onKeyDown(event)}></input>
                            <Button size="sm" variant="outline-success" onClick={this.handleAddFaction}>Submit</Button>
                        </div>
                    </div>

                </Modal.Body>

                <Modal.Footer>
                    <Button variant="outline-success" onClick={this.handleSave} >Save</Button>
                </Modal.Footer>
            </Modal>
        </div>
    )}}

export default FactionOrgs;