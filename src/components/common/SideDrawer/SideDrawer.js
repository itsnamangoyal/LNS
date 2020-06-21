import React from 'react'

import './SideDrawer.css'

const SideDrawer = (props) =>{
    return(
        <div className="side-drawer">
            <div className="side-drawer-list">
                <button 
                    className="side-drawer-item" 
                    id="close-menu-button"
                    onClick={props.menuButtonClickHandler}>CLOSE MENU</button>
                <div className="side-drawer-item"><a href="/">HOME</a></div>
                <div className="side-drawer-item"><a href="/products" >PRODUCTS</a></div>
                <div className="side-drawer-item"><a href="/aboutus" >ABOUT</a></div>
                <div className="side-drawer-item"><a href="/contactus">CONTACT</a></div>
            </div>
        </div>
    )
}

export default SideDrawer