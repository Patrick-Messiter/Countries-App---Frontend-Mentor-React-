import React from 'react';
import './App.css';
import {Navbar} from './Navbar';
import {Main} from './Main'
import {Section} from './Section'

function App() {

  const [countryData, setCountryData] = React.useState(null)
  const [chooseCountry, setChooseCountry] = React.useState()
  const [toggle, setToggle] = React.useState(false)
    

  //Call API function
  async function getCountryAPI () {
      const res = await fetch("https://restcountries.com/v3.1/all")
      const data = await res.json()
      setCountryData(data)
  }

  console.log(countryData)
  console.log(chooseCountry)


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
          toggle = {toggle}
          setToggle = {setToggle}
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
        toggle = {toggle} 
        setToggle = {setToggle}
      />
    )
  }

  return (
    <div className="App">
      <Navbar />
      {toggle ? renderSectionComponent() : renderMainComponent()}
    </div>
  );
}

export default App;
