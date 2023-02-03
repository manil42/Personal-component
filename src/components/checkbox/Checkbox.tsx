import React from 'react'
import { CheckboxProps } from './Checkbox.type'

const Checkbox = ({label}:CheckboxProps) => {
  return (
    <div className='checkbox-wrapper'>
        {/* <label> */}
            <input type="checkbox" />
            <span>{label}</span>
        {/* </label> */}
    </div>
  )
}

export default Checkbox
