/* every single component in NextJS is server side rendering component, so we can use 'use client' directly to turn this component into a client side component. */
"use client"
import React from 'react'
import Image from 'next/image'
import {title} from 'process'
import {CustomButtonProps} from '@types'

const CustomButton = ({btnType, title, containerStyles, handleClick}: CustomButtonProps) => {

    return (
        <button
            disabled={false}
            type={btnType || 'button'}
            className={`custom-btn ${containerStyles}`}
            onClick={handleClick}>
      <span className={`flex-1`}>
        {title}
      </span>
        </button>
    )
}

export default CustomButton
