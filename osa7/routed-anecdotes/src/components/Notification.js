import React from 'react'

const Notification = (props) => {
    const style = {
        border: 'solid',
        padding: 5,
        margin: 5,
        borderWidth: 1
      }
    
      if(props.notification === ''){
        return null
      }
    
      return (
        <div style={style}>
          {props.notification}
        </div>
      )
}

export default Notification