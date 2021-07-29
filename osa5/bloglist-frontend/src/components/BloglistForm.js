import React from 'react'
import Togglable from './Togglable'
import CreateBlogForm from './CreateBlogForm'
import Blog from './Blog'
import PropsType from 'prop-types'

const BloglistForm = ({ user, blogs, handleLogout, createBlogFormRef, addBlog, handleLikes, handleRemoval }) => {
  return (
    <div>
        Welcome, { user.name }!
      <button className="button" type="submit" onClick={handleLogout}>logout</button>

      <Togglable buttonLabel='create new blog' ref={createBlogFormRef}>
        <CreateBlogForm key={user.id} createBlog={addBlog}/>
      </Togglable>

      <h3>Your blogs</h3>
      {blogs.map(b =>
        <Blog key={b.id} blog={b} user={user} handleLikes={handleLikes} handleRemoval={handleRemoval} />
      )}
    </div>
  )
}

BloglistForm.propsType = {
  user: PropsType.object.isRequired,
  blogs: PropsType.object.isRequired,
  handleLogout: PropsType.func.isRequired,
  createBlogFormRef: PropsType.func.isRequired,
  addBlog: PropsType.func.isRequired,
  handleLikes: PropsType.func.isRequired,
  handleRemoval: PropsType.func.isRequired
}

export default BloglistForm