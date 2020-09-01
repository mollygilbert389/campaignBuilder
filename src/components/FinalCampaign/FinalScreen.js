import React, {Component} from 'react'
import maps from "./jsonMaps/maps.json";
import MapCard from "./MapCard"
import {Button, OverlayTrigger, Tooltip} from 'react-bootstrap'
import CampaignCard from './CampaignCard'
import './style.css'


class FinalScreen extends Component {
    state = {
        displayMap: false,
        randomMapId: 0,
        clicked: false
    }

    handleGenerate = () => {
        this.setState({
            displayMap: true,
            clicked: true
        })
        this.getMapsByType()
    }

    // getRandomMap = () => {
    //     let mapArray = maps.map(map => map.id)
    //     mapArray.sort(function() {
    //         return .5 - Math.random();
    //     })
        
    //     const randoId = mapArray.pop() -1

    //     this.setState({
    //         randomMapId: randoId
    //     })

    // }

    getMapsByType = () => {
        const mapChoice = this.props.campaign.world

        let filteredMaps  = maps.filter(map => (map.world.includes(mapChoice)))
        
        const chosenMap = filteredMaps.map(map => map.id)
        chosenMap.sort(function() {
            return .5 - Math.random();
        })

        let finalMapId = chosenMap[0]

        this.setState({
            randomMapId: finalMapId
        })
    }

render() {  

    const{campaign}=this.props
    
    return (
        <div className="d-flex flex-column align-items-center">
            <div className="d-flex flex-column align-items-center">
                <Button 
                variant="outline-danger" 
                size="lg" 
                onClick={this.handleGenerate}
                disabled={this.state.clicked} 
                >Generate My Campaign
                </Button>
            </div>
            <br></br>
            {this.state.displayMap && (<div>
                <MapCard
                    id={maps[this.state.randomMapId].id}
                    key={maps[this.state.randomMapId].id}
                    image={maps[this.state.randomMapId].image}
                    name={maps[this.state.randomMapId].name}
                ></MapCard>
                </div>)}
        </div>
    )}}

export default FinalScreen;