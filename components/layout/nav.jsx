'use client';
import React from 'react'
import { NAV_ITEMS } from '@/config/site'
import NavItem from '@/components/layout/nav-item'
import MenuIcon from '@/components/ui/menu-icon'
import LogoFull from '@/components/ui/logo-full'


const Nav = () => {

  const handleOpenMenu = () => {
    console.log("open menu")
  }

  return (
    <nav className="flex items-center justify-between px-4 sm:px-8 md:px-16 lg:px-24 py-4 sm:py-4 md:py:8 lg:py-8">
        <LogoFull />

        <div className="flex items-center">
          <ul role="list" className="md:flex hidden">
          {NAV_ITEMS.map((item, index) => {
              return <NavItem key={index}></NavItem>
          })}
          </ul>
        

        <button className="btn btn-contained mr-4 hidden sm:flex">Login</button>
        <MenuIcon onClick={handleOpenMenu} />
        </div>
        
    </nav>
  )
}

export default Nav