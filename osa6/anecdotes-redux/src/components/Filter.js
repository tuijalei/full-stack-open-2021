import React from 'react'
import { connect } from 'react-redux'
import { filterChange } from '../reducers/filterReducer'

const Filter = (props) => {
  //const dispatch = useDispatch()

  const handleChange = (event) => {
    props.filterChange(event.target.value)
  }
  const style = {
    marginBottom: 10
  }

  return (
    <div style={style}>
      filter <input onChange={handleChange} />
    </div>
  )
}

//Get stateProps whenever the state changes
const mapStateToProps = (state) => {
  return {
    filter: state.filter
  }
}

//Get dispatchProps - each field is an action creator
const mapDispatchToProps = {
  filterChange
}

const ConnectedFilter = connect(mapStateToProps, mapDispatchToProps)(Filter)

export default ConnectedFilter