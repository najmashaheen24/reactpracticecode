import React from 'react';
import '../card/card.style.css';

export const Card = props => ( 
    <div className="card-conatiner">
        <img 
        alt='monster'
        src={'https://robohash.org/${props.monster.id}?set=set16&size=180x180'}/>
        <h3> {props.monster.name} </h3>
        <p> {props.monster.email} </p>
    </div>
);