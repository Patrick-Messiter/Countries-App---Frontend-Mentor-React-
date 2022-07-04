import React from 'react';
import './App.css';
import {Navbar} from './Navbar';
import {Main} from './Main'
import {Section} from './Section'

function App() {

  const [countryData, setCountryData] = React.useState(null)
  const [chooseCountry, setChooseCountry] = React.useState()
  const [toggleSection, setToggleSection] = React.useState(false)
  const [toggleDarkMode, setToggleDarkMode] = React.useState(false)
    

  //Call API function
  async function getCountryAPI () {
      const res = await fetch("https://restcountries.com/v3.1/all")
      const data = await res.json()
      setCountryData(data)
  }

  console.log(countryData)


  //Call API useEffect conditions
  React.useEffect(() => {
      getCountryAPI()
    }, [])
  

  // Render API to Main once API has been fetched

  function renderMainComponent () {
    if (countryData != null){
      return (
        <Main 
          countryData = {countryData}
          setCountryData = {setCountryData}
          chooseCountry = {chooseCountry}
          setChooseCountry = {setChooseCountry}
          toggleSection = {toggleSection}
          setToggleSection = {setToggleSection}
          toggleDarkMode = {toggleDarkMode}
        />
      )
    }
  }

  // Render Specific Country function when Card has been clicked

  function renderSectionComponent () {
    return (
      <Section
        countryData = {countryData}
        item = {chooseCountry}
        setChooseCountry = {setChooseCountry}
        toggleSection = {toggleSection} 
        setToggleSection = {setToggleSection}
        toggleDarkMode = {toggleDarkMode}
      />
    )
  }

  return (
    <div className="App">
      <Navbar
        toggleDarkMode = {toggleDarkMode}
        setToggleDarkMode = {setToggleDarkMode}
       />
      {toggleSection ? renderSectionComponent() : renderMainComponent()}
    </div>
  );
}

export default App;
