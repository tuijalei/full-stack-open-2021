import React from 'react'
import { useHistory } from 'react-router-dom'
import { useField } from '../hooks/index'

const CreateNewForm = ({ addNew, setNotification }) => {
  const content = useField('text')
  const author = useField('text')
  const info = useField('text')
  //Gives an access to the history instance that may be used to navigate
  const history = useHistory()

  //Adding the new anecdote
  const handleSubmit = (e) => {
    e.preventDefault()
    addNew({
      content: content.input.value,
      author: author.input.value,
      info: info.input.value,
      votes: 0
    })

    setNotification(`New anecdote '${content.input.value}' created!`)
    setTimeout(() => {
      setNotification('')
    }, 10000)
    history.push('/')
  }

  //Reseting fields
  const handleReset = (e) => {
    e.preventDefault()
    content.resetValue()
    author.resetValue()
    info.resetValue()
  }

  return (
    <div>
      <h2>create a new anecdote</h2>
      <form>
        <div>
          content <input {...content.input} />
        </div>
        <div>
          author <input {...author.input} />
        </div>
        <div>
          url for more info <input {...info.input} />
        </div>
        <button onClick={handleSubmit}>create</button>
        <button onClick={handleReset}>reset</button>
      </form>
    </div>
  )

}

export default CreateNewForm