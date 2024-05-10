import React from 'react'
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })
import NavBar from '@/app/common/navBar'
export default function page() {
  return (
    <div>
    <NavBar> </NavBar>
    </div>
  )
}
