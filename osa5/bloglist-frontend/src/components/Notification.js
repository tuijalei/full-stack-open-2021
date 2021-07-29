import React from 'react'
import PropTypes from 'prop-types'

const Notification = ({ noti }) => {
  if(noti.success === undefined){
    return null
  }

  if(noti.success){
    return (
      <div className="notification">
        {noti.message}
      </div>
    )
  } else if(!noti.success){
    return (
      <div className="error">
        {noti.message}
      </div>
    )
  }

}

Notification.propTypes = {
  noti: PropTypes.object.isRequired
}

export default Notification