import React, {Component} from 'react'
import maps from "./maps.json";
import MapCard from "./MapCard"
import {Button, OverlayTrigger, Tooltip} from 'react-bootstrap'
import CampaignCard from './CampaignCard'
import './style.css'


class FinalScreen extends Component {
    state = {
        displayMap: false,
        randomMapId: 0
    }

    handleGenerate = () => {
        this.setState({
            displayMap: true
        })
        this.getRandomMap()
    }

    getRandomMap = () => {
        let mapArray = maps.map(map => map.id)
        mapArray.sort(function() {
            return .5 - Math.random();
        })
        
        const randoId = mapArray.pop() -1

        this.setState({
            randomMapId: randoId
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