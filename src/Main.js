import React from 'react'
import {Card} from './Card'

function Main (props) {
 
    // Update chooseCountry state and toggle state on click event handler of each card
    
    function selectCard (id) {
        props.countryData.map(currentObject => {
            if (currentObject.name.common === id) {
                props.setChooseCountry(currentObject)
                props.setToggle(true)
            }
        })
    } 

    // Render API to Card once API has been fetched

    const renderCountry = props.countryData.map(currentCountry => {
        return (
            <Card
                key = {currentCountry.name.common}
                item = {currentCountry}
                selectCard = {() => selectCard(currentCountry.name.common)}
            />
        )
    })

    return (
        <main className='Main-home-section'>
            <div className='Home-outer-container'>
                <div className='Home-top-container'>
                    <input></input>
                    <select></select>
                </div>
                <div className='Home-card-container'>
                    {renderCountry}
                </div>
            </div>
        </main>
    )
}

export {Main}