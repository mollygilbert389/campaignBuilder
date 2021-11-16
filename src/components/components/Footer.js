import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../home.css'

function Footer() {
    return (
        <div className="footer" >
            &copy; {new Date().getFullYear()} Copyright: An App By Molly Gilbert
        </div>
    )
}

export default Footer;