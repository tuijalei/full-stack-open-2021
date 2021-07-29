import React, { useState } from 'react'
import PropTypes from 'prop-types'

// Adding a new contact to phonebook
const CreateBlogForm= ({ createBlog }) => {
  const [newTitle, setNewTitle] = useState('')
  const [newAuthor, setNewAuthor] = useState('')
  const [newUrl, setNewUrl] = useState('')

  const handleTitleChange = (event) => {
    setNewTitle(event.target.value)
  }

  const handleAuthorChange = (event) => {
    setNewAuthor(event.target.value)
  }

  const handleUrlChange = (event) => {
    setNewUrl(event.target.value)
  }

  const addBlog = (event) => {
    event.preventDefault()
    createBlog({
      title: newTitle,
      author: newAuthor,
      url: newUrl
    })

    setNewTitle('')
    setNewAuthor('')
    setNewUrl('')
  }

  return(
    <div className="formDiv">
      <h3>Create a new blog</h3>
      <form onSubmit={addBlog}>
        <div>title:
          <input
            id='title'
            value={newTitle}
            onChange={handleTitleChange} />
        </div>
        <div>author:
          <input
            id='author'
            value={newAuthor}
            onChange={handleAuthorChange} />
        </div>
        <div>url:
          <input
            id='url'
            value={newUrl}
            onChange={handleUrlChange} />
        </div>
        <div>
          <button type="submit">create</button>
        </div>
      </form>
    </div>

  )
}

CreateBlogForm.propTypes = {
  createBlog: PropTypes.func.isRequired
}

export default CreateBlogForm