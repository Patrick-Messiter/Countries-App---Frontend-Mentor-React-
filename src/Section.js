import React from 'react'
import {formatPopulation} from './globalFunctions'

function Section (props) {

    const [borderCountry, setBorderCountry] = React.useState([])
    
    function backToMain () {
        props.setToggle(false)
    }

    // Obtaining Native Name and Currencies data which has keys that are country specific

    let nativeNameObj = props.item.name.nativeName
    let nativeNameFirst = nativeNameObj[Object.keys(nativeNameObj)[0]]

    let currencyObj = props.item.currencies
    let currencyObjFirst = currencyObj[Object.keys(currencyObj)[0]]

    // Mapping through languages to alter string to be rendered to the section

    let languagesArray = Object.values(props.item.languages)
    let languageString = ""
    languagesArray.map((language, i, languagesArray) => {
        return languagesArray.length - 1 === i ? languageString += `${language}` : languageString += `${language}, `
    })

    // Bordering Countries section

    // Function which updates the borderCountry state to include the objects for each country that borders the current selected country

    function borderMap () {
        if (props.item.borders) {
            props.countryData.map(country => {
                if (props.item.borders.includes(country.cca3)) {
                    setBorderCountry(prevState => {
                        return [...prevState, country]
                    })
                }
            })
        }
    }

    // Use effect so that the bordermap function runs only when the selected country has changed, it also returns a cleaning function to reset the borderstate

    React.useEffect(()=> {
        props.item.borders && borderMap()

        return () => {
            setBorderCountry([])
        }

    }, [props.item])

    console.log(borderCountry)

    // Function to map through buttons for the border countries section with an onclick event to change the chooseCountry state to that of the buttons

    const borderButtons = borderCountry.map(country => {
        return <button className='Country-section-button' onClick={() => props.setChooseCountry(country)} key={country.name.common}>{country.name.common}</button>
    })
    
    return (
        <section className='Country-section'>
            <button className='Country-section-button Back-button' onClick={backToMain}>&#8592; Back</button>
            <div className='Country-section-container'>
                <img src = {props.item.flags.svg} alt = {`${props.item.name.common} flag`}/>
                <div className='Country-section-container-inner'>
                    <h1>{props.item.name.common}</h1>
                    <div className='Country-section-container-inner-leftlist'>
                        <ul>
                            <li><span>Native Name: </span>{nativeNameFirst.common ? `${nativeNameFirst.common}` : "Nil native name"}</li>
                            <li><span>Population:</span> {formatPopulation(props.item.population)}</li>
                            <li><span>Region:</span> {props.item.region}</li>
                            <li><span>Sub Region:</span> {props.item.subregion}</li>
                            <li><span>Capital:</span> {props.item.capital}</li>
                        </ul>
                    </div>
                    <div className='Country-section-container-inner-rightlist'>
                        <ul>
                            <li><span>Top Level Domain:</span> {props.item.tld ? `${props.item.tld[0]}` : "There is nil top level domain"} </li>
                            <li><span>Currencies:</span> {currencyObjFirst.name}</li>
                            <li><span>Languages:</span> {languageString} </li>
                        </ul>
                    </div>
                    <div className='Country-section-container-inner-bottom'>
                        <p><span>Border Countries:</span> {borderButtons} </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export {Section}