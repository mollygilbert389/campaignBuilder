import React from 'react'
import {Button, OverlayTrigger, Tooltip} from 'react-bootstrap'
import StoryInfo from "../StoryInfo/StoryInfo"
import CampaignCard from '../CampaignCard/CampaignCard'


function GeneratBtn(props) {
  
    return (
        <div>

        <OverlayTrigger overlay={
            <Tooltip>Coming Soon!</Tooltip>}>
            <span className="d-inline-block">
            <Button variant="outline-danger" size="lg" href="#" disabled>Generate My Campaign
            </Button>
            </span>
            </OverlayTrigger>
        
          <StoryInfo campaign={props.campaign}></StoryInfo>

      {/* <CampaignCard></CampaignCard> */}

      </div>
    )
}



export default GeneratBtn;