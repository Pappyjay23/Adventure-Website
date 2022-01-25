import React from 'react'
import CardItem from './CardItem'
import "./CardSection.css"

function CardSection() {
    return (
        <div className="card__section">
            <div className="card__container">
                <h1>Check out these EPIC Destinations!</h1>
                <div className="cards__wrapper">
                    <CardItem path="/services" img="./images/img-9.jpg" type="Adventure" description="Explore the hidden waterfall deep within the Amazon jungle" />
                    <CardItem path="/services" img="./images/img-2.jpg" type="Luxury" description="Travel through the Island of Bali in a private cruise" />
                </div>
                <div className="cards__wrapper">
                    <CardItem path="/services" img="./images/img-3.jpg" type="Mystery" description="Set Sail in the Atlantic Ocean visiting UnChartered waters" />
                    <CardItem path="/services" img="./images/img-4.jpg" type="Adventure" description="Experience Football on top of the Himalayan Mountains" />
                    <CardItem path="/services" img="./images/img-8.jpg" type="Adrenaline" description="Ride through the Sahara Desert on a guided camel tour" />
                </div>
                
            </div>
        </div>
    )
}

export default CardSection
