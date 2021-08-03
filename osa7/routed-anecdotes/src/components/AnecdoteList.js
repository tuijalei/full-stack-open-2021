import React from 'react'
import { Link } from 'react-router-dom'

//To have all anecdotes in a list
//Anecdotes are Links navigating to the page showing the single anecdote
const AnecdoteList = ({ anecdotes }) => (
    <div>
      <h2>Anecdotes</h2>
      <ul>
        {anecdotes.map(anecdote => 
        <li key={anecdote.id} >
          <Link to={`/anecdotes/${anecdote.id}`}>{anecdote.content}</Link>
        </li>)}
      </ul>
    </div>
  )

export default AnecdoteList