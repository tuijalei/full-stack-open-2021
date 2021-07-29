import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, fireEvent } from '@testing-library/react'
import { prettyDOM } from '@testing-library/dom'
import Blog from './Blog'

describe('<Blog />', () => {
  const user = {
    username: 'testing',
    salasana: 'testing'
  }
  const blog = {
    title: 'Component testing with react-testing-library',
    author: 'Someone',
    url: 'www.testing.fi',
    likes: 5,
    user: user
  }

  let component
  let likeHandler
  let removalHandler

  beforeEach(() => {
    likeHandler = jest.fn()
    removalHandler = jest.fn()

    component = render(
      <Blog blog={blog} user={user}
        handleLikes={likeHandler} handleRemoval={removalHandler} />)
  })

  test('at start show only title and author', () => {
    const div = component.container.querySelector('.allInfo')
    expect(div).toHaveStyle('display: none')
  })

  test('when a button clicked, show the rest of the info', () => {
    const button = component.getByText('view')
    //console.log(prettyDOM(button))
    fireEvent.click(button)

    const div = component.container.querySelector('.allInfo')
    expect(div).not.toHaveStyle('display: none')
  })

  test('all info can be rendered', () => {
    const div = component.container.querySelector('.basicInfo')
    //Expecting to render title and author
    expect(div).toHaveTextContent(blog.title, blog.author)

    //... but not url nor likes
    expect(div).not.toHaveTextContent(blog.url, blog.likes)

    const div2 = component.container.querySelector('.allInfo')
    //Expecting to see rest of the info
    expect(div2).toHaveTextContent(blog.url, blog.likes, user.name)
  })

  test('clicking a button once, call event handler one time', () => {
    const button = component.getByText('like')
    fireEvent.click(button)

    expect(likeHandler.mock.calls).toHaveLength(1)
  })

  test('clicking a button twice, call event handler twice', () => {
    const button = component.getByText('like')
    //console.log(prettyDOM(button))
    fireEvent.click(button)
    fireEvent.click(button)

    expect(likeHandler.mock.calls).toHaveLength(2)
  })
})

