import React from "react";
import "../home.css";

function Footer() {
  return (
    <div className="footer">
      &copy; {new Date().getFullYear()} Copyright: An App By Molly Gilbert
    </div>
  );
}

export default Footer;
