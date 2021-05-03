import React from 'react'

// Calculating all exercises together for each course
const Total = ({parts}) => {
    let total = parts.reduce((acc,curr) => acc + curr.exercises, 0)
    return <b>Total of {total} exercises</b>
}

export default Total