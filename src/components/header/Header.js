import React, {useState } from "react"
import {
    Navbar,
    Collapse,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    
} from "reactstrap"
import './header.css'

const Header = (props) => {
    const [isOpen, setIsOpen]= useState(false)
    const toggle = ()=> setIsOpen(!isOpen)
    
    return (
        <Navbar sticky="top" color="dark" dark expand="md" className="header">
            <NavbarBrand className="font-weight-bold" href="/">LAXMI NARAYAN & SONS</NavbarBrand>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar className="header-list">
                <Nav className="rm-auto" pills navbar>
                    <NavItem active className="header-item">
                        <NavLink href="/">Home</NavLink>
                    </NavItem>
                    <NavItem active className="header-item">
                        <NavLink href="/products/">Products</NavLink>
                    </NavItem>
                    <NavItem active className="header-item">
                        <NavLink href="/about/">About Us</NavLink>
                    </NavItem>
                    <NavItem active className="header-item">
                        <NavLink href="/contact/">Contact Us</NavLink>
                    </NavItem>
                </Nav>
            </Collapse>
        </Navbar>   
    )
}

export default Header