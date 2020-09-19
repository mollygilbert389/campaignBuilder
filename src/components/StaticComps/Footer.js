import React from 'react'
import {ProgressBar} from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css'

function Footer() {
    return (
        <div className="footer" >
            {/* <ProgressBar animated now={45}/>
            <br></br> */}
            &copy; {new Date().getFullYear()} Copyright: An App By Molly Gilbert
        </div>
    )
}

export default Footer;