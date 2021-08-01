import anecdoteService from "../services/anecdotes"

const anecdoteReducer = (state = [], action) => {
  //console.log('state now: ', state)
  //console.log('action', action)

  switch(action.type) {
    case 'VOTE':
      const id = action.data.id
      const votedAnecdote = state.find(a => a.id === id)
      const voted = { ...votedAnecdote, votes: votedAnecdote.votes + 1 }
      return state.map(a => a.id !== id ? a : voted)
    case 'NEW_ANECDOTE':
      return [...state, action.data]
    case 'INIT_ANECDOTES':
      return action.data
    default:
      return state
  }

}

// == Action creators == //

//For voting an anecdote
export const vote = (id) => {
  return async dispatch => {
    const anecdotes = await anecdoteService.getAll()
    const anecdoteToVote = anecdotes.find(a => a.id === id)
    //console.log(anecdoteToVote)
    const updatedAnecdote = { ...anecdoteToVote, votes: anecdoteToVote.votes + 1}
    await anecdoteService.vote(updatedAnecdote.id, updatedAnecdote)
    dispatch({
      type: 'VOTE',
      data: { id }   
    })

  }
}

//For creating a new anecdote
//Note: votes are set at 0 at first and id is generated randomly
export const createAnecdote = (content) => {
  return async dispatch => {
    const newAnecdote = await anecdoteService.create(content)
    dispatch({
      type: 'NEW_ANECDOTE',
      data: newAnecdote
    })

  }
}

//For initializing anecdotes from server
export const initializeAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await anecdoteService.getAll()
    dispatch({
      type: 'INIT_ANECDOTES',
      data: anecdotes
    })
  }
}

// ===================== //

export default anecdoteReducer