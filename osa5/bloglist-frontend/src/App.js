import React, { useState, useEffect, useRef } from 'react'
import Notification from './components/Notification'
import BloglistForm from './components/BloglistForm'
import LoginForm from './components/LoginForm'
import blogService from './services/blogs'
import loginService from './services/login'

const App = () => {
  const [blogs, setBlogs] = useState([])
  const [notification, setNotification] = useState({})
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [user, setUser] = useState(null)
  const createBlogFormRef = useRef()

  // === Server stuff and few helpers === //

  useEffect(() => {
    const getBlogs = async () => {
      const initialBlogs = await blogService.getAll()
      setBlogs(initialBlogs)
    }
    getBlogs()
  }, [])

  //Handling the logged in page loading
  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedBloglistUser')
    if(loggedUserJSON){
      const user = JSON.parse(loggedUserJSON)
      setUser(user)
      blogService.setToken(user.token)
    }
  }, [])

  const reorderBlogsByLikes = (blogs) => {
    return blogs.sort((a, b) => b.likes - a.likes)
  }

  const showMessage = (message, success) => {
    setNotification({ message, success })
    setTimeout(() => {
      setNotification({})
    }, 10000)
  }

  // === Handling adding, updating and deletion == //

  //Adding a new blog
  const addBlog = async (blogObj) => {
    //Hide form once a blog created
    createBlogFormRef.current.toggleVisibility()

    try{
      const createdBlog = await blogService.create(blogObj)
      console.log('created and posted', createdBlog)
      setBlogs(reorderBlogsByLikes(blogs.concat(createdBlog)))
      showMessage(`Added a new blog ${blogObj.title} by ${blogObj.author} to server`, true)
    } catch (error) {
      console.log(error)
      showMessage(`Something went wrong: ${error}`, false)
    }
  }

  //Add likes if button pressed and refresh the page
  const handleLikes = async blog => {
    const allBlogs = await blogService.getAll()
    const likedBlog = allBlogs.filter(i => i.id === blog.id).reduce(a => a)

    try{
      likedBlog.likes++
      await blogService.update(likedBlog.id, likedBlog)
      setBlogs(reorderBlogsByLikes(allBlogs))
    } catch (error) {
      console.log(error)
      showMessage(`Something went wrong: ${error}`, false)
    }
  }

  //Delete a blog after confirmation and refresh the page
  const handleRemoval = async blog => {
    try{
      if(window.confirm(`Remove blog ${blog.title} by ${blog.author}?`)){
        await blogService.deleteBlog(blog.id)
        const updatedList = blogs.filter(i => i.id !== blog.id)
        setBlogs(reorderBlogsByLikes(updatedList))
      }
    } catch (error){
      console.log(error.message)
      showMessage(`Something went wrong: ${error}`, false)
    }
  }

  // === Logging in and logging out  === //

  const handleLogin = async (event) => {
    event.preventDefault()
    console.log('logging in', username, password)

    try{
      const user = await loginService.login({ username, password })

      //Store the user to local storage
      window.localStorage.setItem(
        'loggedBloglistUser', JSON.stringify(user)
      )

      blogService.setToken(user.token)
      setUser(user)
      setUsername('')
      setPassword('')
    } catch (expection) {
      showMessage('Wrong username or password', false)
    }
  }

  //Handling the logout - must clear the local storage
  const handleLogout = async (event) => {
    event.preventDefault()
    window.localStorage.clear()
    window.location.reload()
  }

  // ===================================== //

  return (
    <div>
      <h1>Bloglist</h1>
      <Notification noti={notification} />
      {user !== null
        ? <BloglistForm user={user} blogs={blogs} handleLogout={handleLogout}
          createBlogFormRef={createBlogFormRef} addBlog={addBlog}
          handleLikes={handleLikes} handleRemoval={handleRemoval} />
        : <LoginForm  username={username} setUsername={setUsername}
          password={password} setPassword={setPassword}
          handleLogin={handleLogin} />}
    </div>
  )

}

export default App

