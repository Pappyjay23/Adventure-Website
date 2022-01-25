import React from 'react'
import { Button } from './Button'
import "./HeroSection.css"

function HeroSection() {
    return (
        <div className="hero-section">
            {/* <video src="./videos/video-1.mp4" autoPlay muted loop></video> */}
            <div className="hero__content">
                <h1>Adventure Awaits</h1>
                <p>What are you waiting for?</p>
                <Button buttonSize="btn-large" buttonStyle="btn-outline">Get Started</Button>
                <Button buttonSize="btn-large" buttonStyle="btn-primary">Watch Trailer <i className="far fa-play-circle"></i></Button>
            </div>
        </div>
    )
}

export default HeroSection
