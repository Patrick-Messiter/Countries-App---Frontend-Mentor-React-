import React from 'react'

function Card (props) {
    
    return (
        <div onClick={props.selectCard} className='Card-container'>
            <img src={props.item.flags.png} alt={`${props.item.name.common} flag`}/>
            <h3>{props.item.name.common}</h3>
            <p>Population: {props.item.population}</p>
            <p>Region: {props.item.region}</p>
            <p>Capital: {props.item.capital}</p>
        </div>
    )
}

export {Card}