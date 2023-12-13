import { useState } from 'react'
import { InputProps } from '../types/general.types'

function Input({ id, name, type, placeholder, error, required, pattern, label }: InputProps) {
  const [focused, setFocused] = useState<boolean>(false)

  const handleFocus = () => {
    setFocused(true)
  }

  return (
    <label htmlFor={name}>
      {label}
      <input
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        pattern={pattern}
        required={required}
        onBlur={handleFocus}
        onFocus={() => name === 'description' && setFocused(true)}
        data-focus={focused.toString()}
      />
      <p className='input_p_element'>{error}</p>
    </label>
  )
}

export default Input
