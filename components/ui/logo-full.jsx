import React from 'react'
import Logo from "@/components/ui/logo"

const LogoFull = ({className}) => {
  return (
    <div className={`flex items-center ${className || ""}`}>
        <Logo className={"mr-2"} />
        <p className='text-primary-400 font-semibold text-xl'>Swap<span className='text-black'>Airtime</span></p>
    </div>
  )
}

export default LogoFull