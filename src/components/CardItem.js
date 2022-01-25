import React from 'react'
import { Link } from 'react-router-dom'

function CardItem(props) {
    return (
        <div className="card__item">
            <Link to={props.path} className="card__item__link">
                <figure className="top-card">
                    <img src={props.img} alt="Travel" />
                    <p>{props.type}</p>
                </figure>
                <div className="bottom-card">
                    <p>{props.description}</p>
                </div>
            </Link>
        </div>
    )
}

export default CardItem
