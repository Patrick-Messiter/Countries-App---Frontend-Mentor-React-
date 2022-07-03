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
            <div className='Form-input-container'>
                <p>&#x1F50D;</p>
                <input className='Form-input'
                    type="text"
                    placeholder='Search for a country'
                    name="countryName"
                    onChange = {formSearch}
                    value = {props.formData.countryName}
                />
            </div>
            <select
                id= "regionName"
                value = {props.formData.regionName}
                onChange = {formSearch}
                name="regionName"
            >
                <option hidden value="">Filter by Region</option>
                <option hidden={!props.formData.regionName} value="">None</option>
                <option value="Africa">Africa</option>
                <option value="Americas">America</option>
                <option value="Asia">Asia</option>
                <option value="Europe">Europe</option>
                <option value="Oceania">Oceania</option>
            </select>
        </form>
    )
}

export {Form}