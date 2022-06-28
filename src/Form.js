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
        <form>
            <input
                type="text"
                placeholder='Search for a country'
                name="countryName"
                onChange = {formSearch}
                value = {props.formData.countryName}
            />
            <select
                id= "regionName"
                value = {props.formData.regionName}
                onChange = {formSearch}
                name="regionName"
            >
                <option value="">Filter by Region</option>
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