import React from 'react'
import { connect } from 'react-redux'
import { createAnecdote } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'

/*
* Note! Only reference function through the component's props as it
* contains the automatic dispatch (cause of the connect from react-redux)!
* (props.setNotification() - NOT directly setNotification() tho it's imported)
*/

const AnecdoteForm = (props) => {
    //const dispatch = useDispatch()
    
    //Notify user with a proper message when an anecdote created
    //Remove notification after *5* secs
    const notify = (content) => {
      props.setNotification(`You have created anecdote '${content}'`, 5)
    }

    //Add a new anecdote and notify user
    const addAnecdote = async(event) => {
        event.preventDefault()
        const content = event.target.anecdote.value
        event.target.anecdote.value = ''
        props.createAnecdote(content)
        notify(content)
      }

      return (
        <div>
          <h2>create new</h2>
          <form onSubmit={addAnecdote}>
            <div><input name="anecdote"/></div>
            <button name="create" type="submit">create</button>
          </form>            
        </div>
      )
}

export default connect(
  null, { createAnecdote, setNotification }
)(AnecdoteForm)