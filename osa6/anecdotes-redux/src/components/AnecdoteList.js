import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { vote } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'
import store from '../store'

const AnecdoteList = (props) => {
    const anecdotes = useSelector(state => {
      if(state.filter === 'ALL'){
        return state.anecdotes
      }

      return state.filter 
      ? state.anecdotes.filter(a => a.content.toLowerCase().includes(state.filter.toLowerCase()))
      : state.anecdotes
    })

    const dispatch = useDispatch()

    //Notify user with a proper message when an anecdote voted
    //Remove notification after *5* sec
    const notify = (content) => {
      dispatch(setNotification(`You have voted anecdote '${content}'`, 5))
    }

    return(
        <div>
        {anecdotes
            .slice()
            .sort((a,b) => b.votes - a.votes)
            .map(anecdote =>
              <div key={anecdote.id}>
                <div>
                  {anecdote.content}
                </div>
                <div>
                  has {anecdote.votes}
                  <button name="vote" onClick={() => {
                    dispatch(vote(anecdote.id)) 
                    notify(anecdote.content)}}>vote</button>
                </div>
              </div>
          )}
        </div>
    )
}

export default AnecdoteList