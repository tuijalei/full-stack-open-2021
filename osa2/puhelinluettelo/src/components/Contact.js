import React from 'react'
import personsService from '../services/persons' 

// Initializing one contact for Phonebook
// Putting it to a table with delete button
const Contact = (props) => {
    const {id, name, number, persons, setPersons} = props

        // Deleting a contact if button pressed and confirmed
        const deleteContact = () => {
            if(window.confirm(`Delete ${name}?`)) {
                personsService.deleteContact(id)
                .then(() => { setPersons(persons.filter(person => person.id !== id))
                })
                alert(`${name} with number ${number} succesfully deleted from the phonebook`)
            } else {
                alert(`${name} not removed - cancelled by the user`)

            }
        }

    return(
        <table>
            <tbody>
                <tr>
                    <td style={{width:'130px', paddingBottom:'5px'}}>{name}</td>
                    <td style={{width:'130px', paddingBottom:'5px'}}>{number}</td>
                    <td><button onClick={deleteContact}> delete </button></td>
                 </tr>
            </tbody> 
        </table>
    )
}

export default Contact;