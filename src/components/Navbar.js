import React, {useState, useEffect} from 'react'
import {Link} from "react-router-dom"
import { Button } from './Button'
import {MenuItem} from "./MenuItems"
import "./Navbar.css"

function Navbar() {
    const [click, setClick] = useState(false)
    const [button, setButton] = useState(true)
    const menuClick=()=>{
        setClick(!click)
    }
    const showButton =()=>{
        if (window.innerWidth <= 960) {
            setButton(false)
        }else {
            setButton(true)
        }
    }

    const closeNav =()=>{
        setClick(false)
    }

    useEffect(() => {
        showButton();
    }, [])

    window.addEventListener("resize", showButton)
    return (
        <>
          <nav className="navbar">
            <div className="navbar__container">
                <Link to="/" className="nav__title" onClick={closeNav}>TRVL <i className="fab fa-typo3"></i></Link>
                <div className="menu__toggler">
                    <i className={click ? "fas fa-times" : "fas fa-bars" } onClick={menuClick}></i>
                </div>  
                <ul className={click? "navbar__links active" : "navbar__links"}>
                    {MenuItem.map((m)=>{
                        return(
                            <li onClick={closeNav}>
                                <Link className={m.class} to={m.path}>{m.name}</Link>
                            </li>
                        )
                    })}
                </ul>
                {button ? <Button buttonStyle="btn-outline">SIGN UP</Button>: false}
            </div>
          </nav>  
        </>
    )
}

export default Navbar
