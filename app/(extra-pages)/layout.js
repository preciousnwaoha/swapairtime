'use client';
import Nav from '@/components/layout/nav'


export default function RootLayout({ children }) {
  return (
    <>
    <Nav></Nav>
    {children}
    </>
  )
}
