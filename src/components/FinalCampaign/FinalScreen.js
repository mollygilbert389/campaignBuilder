import React, { Component } from 'react'
import { MapCard, CampaignCard, maps } from "./components"
import { Button, OverlayTrigger, Tooltip } from 'react-bootstrap'
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

        this.getMap()
    }

    getMap = () => {
        const mapChoice = this.props.campaign.world || "Forest"

        console.log(mapChoice)

        let filteredMaps  = maps.filter(map => (map.world.includes(mapChoice)))
        console.log(filteredMaps)
        
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

                <OverlayTrigger 
                overlay={
                    <Tooltip>Coming Soon!</Tooltip>}>
                    <span className="d-inline-block">
                        <Button 
                        variant="outline-danger" 
                        size="lg" 
                        onClick={this.handleGenerate}
                        // disabled={this.state.clicked} 
                        href="/"
                        disabled
                        >Generate My Campaign
                        </Button>
                    </span>
                </OverlayTrigger>

            </div>
            <br></br>
            {this.state.displayMap && (<div>
                <MapCard
                    id={maps[this.state.randomMapId].id}
                    key={maps[this.state.randomMapId].id}
                    image={maps[this.state.randomMapId].image}
                    name={maps[this.state.randomMapId].name}
                ></MapCard>
                <CampaignCard></CampaignCard>
                </div>)}
        </div>
    )}}

export default FinalScreen;