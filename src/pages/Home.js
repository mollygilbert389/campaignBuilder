import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button} from 'react-bootstrap';
import {UncontrolledTooltip} from 'reactstrap';
import "../components/home.css"

function Home() {
  return (
    <div>
    <div className="mainques">
        <h1> What kind of Campaign do you want to build?</h1>
       <div className="btnspace">
        
        <div className="btns">
            <Button variant="outline-success" size="lg" href="/shortcampaign">Short
            </Button>
        </div>

        <div className="btns">
            <span id="UncontrolledTooltipExample">
                <Button variant="outline-danger" size="lg" href="/mediumcampaign" disabled>Medium
                </Button>
            </span>
            <UncontrolledTooltip placement="top" target="UncontrolledTooltipExample">
                I currently don't work!
            </UncontrolledTooltip>
        </div>

        <div className="btns">
            <span id="UncontrolledTooltipExample">
                <Button variant="outline-danger" size="lg" href="/longcampaign" disabled>Long
                </Button>
            </span>
            <UncontrolledTooltip placement="top" target="UncontrolledTooltipExample">
                I currently don't work!
            </UncontrolledTooltip>
        </div>

        <div className="btns">
            <span id="UncontrolledTooltipExample">
                <Button variant="outline-danger" size="lg" href="/" disabled>Not Sure Yet
                </Button>
            </span>
            <UncontrolledTooltip placement="top" target="UncontrolledTooltipExample">
                I currently don't work!
            </UncontrolledTooltip>
        </div>

        </div>
    </div>
    </div>

  );
}

export default Home;