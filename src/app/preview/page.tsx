"use client"
import { useFormContext } from '@/context/formContext'
import Image from 'next/image'
import React from 'react'

const Preview = () => {
    const { profileDetails, formLink } = useFormContext()
  return (
    <div className=''>
        <div>
            <Image alt='pic' src={profileDetails?.image} />
            <h1>{profileDetails.firstName}</h1>
            <p>{profileDetails.email}</p>
        </div>
        <div>
            {
                formLink.map((item, index) => (
                    <div key={index}>
                        {item.LinkName}
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Preview
