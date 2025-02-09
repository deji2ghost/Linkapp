import React from 'react'

const CustomLabel = ({text}: { text: string }) => {
  return (
    <label className='font-[400] text-[12px] text-DarkGrey'>
      { text }
    </label>
  )
}

export default CustomLabel
