
import React from 'react'
import { connect } from 'react-redux'

const Notification = (props) => {
  //const notification = useSelector(state => state.notifications)
  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1
  }

  if(props.notifications === null){
    return null
  }

  return (
    <div style={style}>
      {props.notifications}
    </div>
  )

}

//Get stateProps whenever the state changes
const mapStateToProps = (state) => {
  return {
    notifications: state.notifications
  }
}

const ConnectedNotification = connect(mapStateToProps)(Notification)
export default ConnectedNotification