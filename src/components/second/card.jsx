import React from 'react';
import "./index.scss"

const Card = (props) => {
    return(
        <div className="card">
            <img src={props.image} className="image"/>
            <h4 className="content">{props.content}</h4>
        </div>
    )
}

export default Card