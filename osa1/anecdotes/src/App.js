import React, { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0))

  
  // Setting up random value with Math.random() when button pressed
  const setRandomAnecdote = () => {
    setSelected(Math.floor((Math.random()*anecdotes.length)))
  }
  
  // Increase points of spesific anecdote when button pressed
  const voteSelectedAnecdote = () => {
    const  votesCopy = [...votes]
    votesCopy[selected] += 1
    setVotes(votesCopy)
  }

  // Keeping up with the most voted anecdote
  const MostVoted = ({anecdotes}) => {
    let mostVoted = votes.indexOf(Math.max(...votes))

    return(
      <div>
        <h1>Anecdote with most votes</h1>
        <p>{anecdotes[mostVoted]}</p>
        <p>has {votes[mostVoted]} points</p>
      </div>
    )
  }

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p>{anecdotes[selected]}</p>
      <p>has {votes[selected]} votes</p>
      <button onClick={voteSelectedAnecdote}> Vote
      </button>
      <button onClick={setRandomAnecdote}> Next Anecdote 
      </button>
      <MostVoted anecdotes={anecdotes} />
    </div>
  )
}

export default App