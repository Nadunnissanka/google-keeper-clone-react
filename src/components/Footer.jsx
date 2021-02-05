import React from "react";

const year = new Date().getFullYear();

function Footer(){
    return(
        <div className="footer">
            <p>{year} Copyright©  Nadun Nissanka</p>
        </div>
    );
}

export default Footer;