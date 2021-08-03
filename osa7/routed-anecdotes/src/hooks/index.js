import { useState } from 'react'

//Custom hook to simplify CreateNewForm component
export const useField = (type) => {
    const [value, setValue] = useState('')
    
    const onChange = event => {
        setValue(event.target.value)
    }

    const resetValue = () => {
        setValue('')
    }

    return { resetValue, input: {type, value, onChange} }
}