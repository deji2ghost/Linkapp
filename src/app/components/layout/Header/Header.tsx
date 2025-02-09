import React from 'react'

const Header = ({ content, paragraph }: { content: string, paragraph: string}) => {
  return (
    <div className='flex flex-col gap-2'>
    <h1 className="font-[700] text-[24px] text-DarkGrey">
      {content}
    </h1>
    <p className="font-[400] text-[16px] text-Grey">{paragraph}</p>
    </div>
  )
}

export default Header
