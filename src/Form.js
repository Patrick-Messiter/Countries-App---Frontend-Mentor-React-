import React from 'react'

function Form (props) {

    function formSearch(event) {
        props.setFormData(prevFormData => {
            return {
                ...prevFormData,
                [event.target.name]: event.target.value
            }
        })
    }
    
    return (
        <form className='Form-container'>
            <div className= {props.toggleDarkMode ? "DarkMinor Form-input-container" : "LightMinor Form-input-container"}>
                <p>&#x1F50D;</p>
                <input className={props.toggleDarkMode ? "DarkMinor Form-input" : "LightMinor Form-input"}
                    type="text"
                    placeholder='Search for a country'
                    name="countryName"
                    onChange = {formSearch}
                    value = {props.formData.countryName}
                />
            </div>
            <div className= "Form-select-container">
                <select
                    id= "regionName"
                    value = {props.formData.regionName}
                    onChange = {formSearch}
                    name="regionName"
                    className={props.toggleDarkMode ? "DarkMinor" : "LightMinor"}
                >
                    <option hidden value="">Filter by Region</option>
                    <option hidden={!props.formData.regionName} value="">None</option>
                    <option value="Africa">Africa</option>
                    <option value="Americas">America</option>
                    <option value="Asia">Asia</option>
                    <option value="Europe">Europe</option>
                    <option value="Oceania">Oceania</option>
                </select>
            </div>
        </form>
    )
}

export {Form}