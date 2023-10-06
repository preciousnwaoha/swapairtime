import React from 'react'
import Logo from "@/components/ui/logo"

const LogoText = ({className}) => {
  return (
   
        <p className={`text-primary-400 font-semibold text-xl ${className || ""}`}>Swap<span className='text-black'>Airtime</span></p>
  )
}

export default LogoText