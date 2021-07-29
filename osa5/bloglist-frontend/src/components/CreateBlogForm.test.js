import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, fireEvent } from '@testing-library/react'
import { prettyDOM } from '@testing-library/dom'
import CreateBlogForm from './CreateBlogForm'

describe('<CreateBlogForm />', () => {
  let component
  let createBlogHandler

  beforeEach(() => {
    createBlogHandler = jest.fn()
    component = render(
      <CreateBlogForm createBlog={createBlogHandler} />
    )
  })

  test('calling addBlog function with proper values', () => {
    const title = component.container.querySelector('#title')
    fireEvent.change(title, {
      target: { value: 'testing is fun' }
    })

    const author = component.container.querySelector('#author')
    fireEvent.change(author, {
      target: { value: 'Testing Author' }
    })

    const url = component.container.querySelector('#url')
    fireEvent.change(url, {
      target: { value: 'www.testing.fi' }
    })

    const form = component.container.querySelector('form')
    //console.log(prettyDOM(form))
    fireEvent.submit(form)

    //Expecting function to be called once
    expect(createBlogHandler.mock.calls).toHaveLength(1)

    //..and right values should be within the call
    expect(createBlogHandler.mock.calls[0][0]).toEqual( {
      title: 'testing is fun',
      author: 'Testing Author',
      url: 'www.testing.fi'
    })
  })

})