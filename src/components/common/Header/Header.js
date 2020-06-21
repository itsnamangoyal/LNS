import React from "react"
import './Header.css'

const Header = (props) => {
    return (
        <div className="header">
            <a href="/" className="header-item">
                <div className="header-brand">
                    LAXMI NARAYAN & SONS
                </div>
            </a>
            <div className="header-list">
                <a href="/" className="header-item">HOME</a>
                <a href="/products" className="header-item">PRODUCTS</a>
                <a href="/aboutus" className="header-item">ABOUT</a>
                <a href="/contactus" className="header-item">CONTACT</a>
            </div>
            <button onClick={props.menuButtonClickHandler} className="menu-button">
                Menu
            </button>
        </div >
    )
}

export default Header