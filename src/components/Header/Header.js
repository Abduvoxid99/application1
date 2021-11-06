import React from "react"

//images
import leftOutIcon from "../../icons/Arrow.png"

import "./header.scss"

const Header = ({handleClick, title}) => {
    return (
        <div className="header_main">
            <div className="head_grid">
                <span onClick={handleClick}><img src={leftOutIcon} alt="img not found"/></span>
                <h1 className="header_text">{title}</h1>
            </div>
        </div>
    )
}

export default Header