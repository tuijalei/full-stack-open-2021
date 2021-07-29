import React, { useState } from 'react'
import PropTypes from 'prop-types'

const Blog = ({ blog, user, handleLikes, handleRemoval }) => {
  const [visible, setVisible] = useState(false)
  const showAllInfo = { display: visible ? '' : 'none' }

  const changeVisibility = () => {
    setVisible(!visible)
  }

  //If loggedin user is the same as the one who added the blog, show remove button
  const showRemoveButton = user && blog.user
    ? blog.user.username === user.username
    : null

  return(
    <div className="bloglist">
      <div className="basicInfo">
        {blog.title} {blog.author}
        <button onClick={changeVisibility}>{visible ? 'hide' : 'view'}</button>
      </div>

      <div className="allInfo" style={showAllInfo}>
        <div>{blog.url}</div>
        <div>{blog.likes} likes
          <button onClick={() => handleLikes(blog)}>like</button></div>
        <div>{blog.user.name}</div>
        {showRemoveButton &&
        <button onClick={() => handleRemoval(blog)}>remove</button>}
      </div>
    </div>
  )

}

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
  handleLikes: PropTypes.func.isRequired,
  handleRemoval: PropTypes.func.isRequired
}

export default Blog