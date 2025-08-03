'use client'
import React from 'react'
import { useNavbar } from '@/app/providers/NavbarProvider'

const HeightWithNavbarDiv = ({children}: {children: React.ReactNode}) => {
    const {navbarHeight} = useNavbar();
  return (
    <div 
    className="relative"
    style={{ height: `calc(100vh - ${navbarHeight}px)` }}>
      {children}
    </div>
  );
}

export default HeightWithNavbarDiv