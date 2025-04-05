'use client'
import React from 'react'
import CustomButton from './CustomButton'
import Image from 'next/image'

const Hero = () => {

  const handleScroll = () => { }

  return (
    <div className='hero'>
      <div className="flex-1 pt-36 padding-x">
        <div className="hero__title">
          Find, book, or rent a car — quickly and easily!
        </div>
        <p className="hero__subtitle">
          Streamline your car rental experience with our effortless online booking process. Enjoy the freedom of choice and convenience at your fingertips.
        </p>

        <CustomButton
          title='Explore Cars'
          containerStyles='bg-primary-blue text-white rounded-full mt-10'
          handleClick={handleScroll} />
      </div>
      <div className="hero__image-container">
        <div className="hero__image">
          <Image src="/hero.png" alt="hero pic" fill className="object-contain"/>
        </div>
            <div className="hero__image-overlay"/>

      </div>
    </div>
  )
}

export default Hero
