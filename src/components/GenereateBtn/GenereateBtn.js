import React from 'react'
import {Button, OverlayTrigger, Tooltip} from 'react-bootstrap'
import StoryInfo from "../StoryInfo/StoryInfo"
import CampaignCard from '../CampaignCard/CampaignCard'
import './style.css'


function GeneratBtn(props) {
  
    return (
        <div>

        <div className="centerItem">
        <OverlayTrigger overlay={
            <Tooltip>Coming Soon!</Tooltip>}>
            <span className="d-inline-block">
            <Button variant="outline-danger" size="lg" href="#" disabled>Generate My Campaign
            </Button>
            </span>
            </OverlayTrigger>
        </div>

      {/* <CampaignCard></CampaignCard> */}

      </div>
    )
}



export default GeneratBtn;