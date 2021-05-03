import React from 'react' 
import Contact from './Contact'

// Showing all contacts or searched ones
const Persons = (props) => {
    const {persons, searchFilter, setPersons} = props
    
      const filterThroughNames = searchFilter
        ? persons.filter(person => person.name.toLowerCase().includes(searchFilter.toLowerCase()))
        : persons

    return(
        <div>
            {filterThroughNames.map(contact => 
                <Contact key={contact.id} name={contact.name} number={contact.number} persons={persons} setPersons={setPersons}/>
            )}
        </div>
    )  
}

export default Persons;