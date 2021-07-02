import axios from 'axios'
import React, { useState, useEffect } from 'react'

// Initializing if a country or a list of 'em shown
// or none of that
const Countries = ({countries, setSearch}) => {

      if(countries.length > 10){
        return(
          <div>Too many matches, specify another filter</div>
        ) 
      } else if (countries.length < 10 && countries.length > 1){
        return(<div>
                {countries.map( c =>
                  <li key={c.alpha3Code}>
                    {c.name}
                    <button onClick={() => setSearch(c.name)}>show</button>
                  </li>
                )}
              </div>)
      } else if (countries.length === 1){
        return(<div>
                <Country country={countries[0]} />
              </div>)
      }

      return null;
  }

// Showing the info of the country
const Country = ({country}) => {
  return(
    <div>
      <h1>{country.name}</h1>
      <p>Capital: {country.capital}</p>
      <p>Population: {country.population}</p>
      <h2>Languages</h2>
    
        {country.languages.map(l => 
          <li key={l.iso639_2}>{l.name}</li>)}

      <p></p>
      <img src={country.flag} alt="A national flag" width={150} />
    </div>
  )
}

// Main app
const App = () => {

  const [countries, setCountries] = useState([])
  const [searchFilter, setSearchFilter] = useState('')

  // Fetching data from URL using Effect Hook
  useEffect(() => {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        setCountries(response.data)
      })
  }, [])

  // Handling search filter
  const handleCountrySearchFilter = (event) => {
    setSearchFilter(event.target.value)
    }

  // Filtering matches by searchFilter
  const filtered = countries.filter(c => c.name.toLowerCase().includes(searchFilter.toLowerCase()))
  
  return (
    <div>
      <form>
        <div> Find countries:
          <input
            value={searchFilter}
            onChange={handleCountrySearchFilter} />
        </div>
      </form>
      <Countries countries={filtered} setSearch={setSearchFilter}/>
    </div>
  )
}

export default App

