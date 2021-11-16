import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { Button, ButtonGroup, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBeer, faGem, faCrown, faDragon, faHatWizard, faShieldAlt, faChessKnight, faAnchor, faAnkh, faArchway, faBalanceScaleLeft, faAtlas, faAtom, faBook, faBookDead, faBookMedical, faCross, faDiceD20, faDollarSign, faDotCircle, faDove, faDraftingCompass, faEye, faFire, faFish, faGlassCheers, faHollyBerry, faHorse, faHourglassHalf, faLandmark, faOm, faRebel, faPallet, faPaw, faPenNib, faPlaceOfWorship, faSkull, faSpider, faStarOfDavid, faStar, faVihara} from '@fortawesome/free-solid-svg-icons';
import "../home.css";
import { setFactionOrgs, setFactionShow } from "../../actions";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

const icons = [
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
];

const FactionOrgs = ({ onSetFactionOrgs, onSetFactionShow }) => {
    const [value, setValue] = useState("");
    const [showModal, setShowModal] = useState(false);
    const [currentBtnId, setCurrentBtnId] = useState(null);
    const [showMiniModal, setShowMiniModal] = useState(false);
    const [suggestedTags, setSuggestedTags] = useState([
        {id: 1, name: "Harpers", icon:faBeer},
        {id: 2, name: "Order of the Guantlet", icon:faShieldAlt},
        {id: 3, name: "Emerald Enclave", icon:faGem},
        {id: 4, name: "Lord's Alliance", icon:faCrown},
        {id: 5, name: "Zhentarim", icon:faDragon},
    ]);

    const setReduxFactionOrgs = (names) => {
        onSetFactionOrgs(names);
    }

    const setReduxFactionShow = (destination, value) => {
        onSetFactionShow(destination, value);
    }

    const handleRemove = (event) => {
        let removedItem = event.target.name;
        let currentTags = suggestedTags;
        const removedFaction = currentTags.filter(item => item.name !== removedItem);
        setSuggestedTags(removedFaction);
    };

    const handleAddFaction = (event) => {
        let currentTags = suggestedTags;
        let newName = value;
        let id = currentTags.length + 1;
        let icon = faDiceD20;
        const updatedFactions = [...currentTags, {id: id, name: newName, icon:icon}];
        setSuggestedTags(updatedFactions);
        setValue("");
    };

    const onKeyDown = (event) => {
        if (event.key === "Enter") {
            handleAddFaction();
        };
    };

    const handleSave = () => {
        setShowModal(!showModal);
        setReduxFactionOrgs(suggestedTags);
        setReduxFactionShow("factionShow", true);
    };

    const handleIconSelect = (event) => {
        const btnId = event.target.id 
        setShowMiniModal(!showMiniModal);
        setCurrentBtnId(btnId);
    };

    const hanleIconFinalSelection = (event) => {
        const btnId = parseInt(currentBtnId);
        const iconId = parseInt(event.target.id);
        const updatedIcon = icons.filter((item) => item.id === iconId);
        const finalIcon = updatedIcon[0].icon;
        const factionIcons = [...suggestedTags].map((item) => {
            if (item.id === btnId) {
                return {...item, icon:finalIcon}
            } return item
        });
        setSuggestedTags(factionIcons);
        setShowMiniModal(!showMiniModal);
    };

    return (
        <div>
            <div className="btns">
                <Button variant="outline-success" size="lg" onClick={() => setShowModal(!showModal)}>Factions and Organizations</Button>
            </div>
            <Modal 
                size="lg" show={showModal} 
                onHide={() => setShowModal(!showModal)} 
                enforcefocus={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Let's add some organizations to your world.</Modal.Title>
                </Modal.Header>
                <Modal.Body className="d-flex flex-column align-items-center">
                    <p>
                        We have a few factions and organizations suggestions. 
                        Feel free to add and remove as many or as little as you want.
                    </p>
                    <br/>
                    <div className="tagsArea centeredItems">
                    {suggestedTags.map((item, idx) => (
                            <ButtonGroup key={idx} className="factionButtons">
                                <OverlayTrigger
                                    placement="left"
                                    overlay={<Tooltip>Change Me!</Tooltip>}>
                                    <Button id={item.id} onClick={handleIconSelect}>
                                        <FontAwesomeIcon className="iconImage" icon={item.icon}/>
                                    </Button>
                                </OverlayTrigger>
                                <Button className="iconImage" name={item.name}>{item.name}</Button>
                                <Button name={item.name} onClick={handleRemove}>X</Button>
                            </ButtonGroup>
                        ))}
                        <Modal
                            size="sm"
                            aria-labelledby="example-modal-sizes-title-sm"
                            show={showMiniModal} 
                            onHide={() => setShowMiniModal(!showMiniModal)}>
                            <Modal.Header closeButton>
                                <Modal.Title>Choose your Icon</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <div className="wrapIcons">
                                    {icons.map((icon, idx) => (
                                            <Button 
                                                key={idx}
                                                className="icons"
                                                id={icon.id}
                                                iconObject={icon.icon}
                                                onClick={hanleIconFinalSelection}>
                                                <FontAwesomeIcon className="iconImage" icon={icon.icon}/>
                                            </Button>
                                        ))}
                                </div>
                            </Modal.Body>
                        </Modal>
                        <div className="inputAndBtn factionButtons">
                            <input 
                                className="factionInput" 
                                placeholder="Add Faction or Organization Here" 
                                type="text" value={value} 
                                onChange={(e) => setValue(e.target.value)} 
                                onKeyUp={(e) => onKeyDown(e)}/>
                            <Button size="sm" variant="outline-success" onClick={handleAddFaction}>Submit</Button>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="outline-success" onClick={handleSave}>Save</Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {campaign: state.campaignReducer}
}

const mapDispatchtoProps = (dispatch) => ({
    onSetFactionOrgs: bindActionCreators(setFactionOrgs, dispatch),
    onSetFactionShow: bindActionCreators(setFactionShow, dispatch)
});

export default connect(mapStateToProps, mapDispatchtoProps)(FactionOrgs);