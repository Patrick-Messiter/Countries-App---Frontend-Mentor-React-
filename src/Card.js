import React from 'react'
import {formatPopulation} from './globalFunctions'

function Card (props) {
    
    return (
        <div onClick={props.selectCard} className={props.toggleDarkMode ? "DarkMinor Card-container" : "LightMinor Card-container"}>
            <img src={props.item.flags.png} alt={`${props.item.name.common} flag`}/>
            <div className='Card-container-inner'>
                <h3>{props.item.name.common}</h3>
                <ul>
                    <li><span>Population:</span> {formatPopulation(props.item.population)}</li>
                    <li><span>Region:</span> {props.item.region}</li>
                    <li><span>Capital:</span> {props.item.capital}</li>
                </ul>
            </div>
        </div>
    )
}

export {Card}