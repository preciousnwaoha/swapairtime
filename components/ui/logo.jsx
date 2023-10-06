import React from 'react'
import Image from "next/image"

const Logo = ({className}) => {
  return (
    <div className={`relative w-8 h-8 object-contain ${className || ""}`}>
        <Image src={"https://img.logoipsum.com/296.svg"} alt="Swapairtime logo" fill
        priority={true} />
    </div>
  )
}

export default Logo