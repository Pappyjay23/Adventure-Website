import React from "react";
import { Link } from "react-router-dom";
import "./Button.css"

export const Button =({buttonStyle, buttonSize, onClick, children})=>{
    const STYLES = ["btn-primary", "btn-outline"]
    const SIZES = ["btn-medium", "btn-large"]
    const checkStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0]
    const checkSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0]
    return(
        <Link to="/sign-up" className="site-btn">
            <button className={`btn ${checkSize} ${checkStyle}`} onClick={onClick}>{children}</button>
        </Link>
    );
}