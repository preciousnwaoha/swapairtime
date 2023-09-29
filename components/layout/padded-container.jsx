import React from 'react'

const PaddedContainer = ({children, className=""}) => {
  return (
    <div className={`px-4 sm:px-8 md:px-16 lg:px-24 ${className}`}>{children}</div>
  )
}

export default PaddedContainer