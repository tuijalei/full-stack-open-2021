import React from 'react'
import Total from './Total'
 
 // Setting up course information
 const Course = ({name, parts}) => {
    
    // title
    const Header = ({name}) => {
    return <h2>{name}</h2>
    }

    // content includes name and exercises of each part
    const Content = ({parts}) => {
      return(
        <div>
          {parts.map(part =>
              <Part name={part.name} exercises={part.exercises} />
          )}
        </div>
      )
    }

    const Part = ({name, exercises}) => {
      return(
        <div>
          <p>
            {name} {exercises}
          </p>
        </div>
      )
    }

    return(
        <div>
          <Header name={name}/>
          <Content parts={parts}/>
          <Total parts={parts}/>
        </div>
      )
}

export default Course