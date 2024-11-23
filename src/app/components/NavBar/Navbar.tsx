import React from 'react'
import Image from 'next/image'
import Logo from '@/app/assets/logo/logo.png'
import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo">
          <Image src={Logo} alt="Logo" width={150} height={50} />
        </div>
        <Link href="/Services">Services</Link>
        <Link href="/About">About</Link>
        <Link href="/Contact">Contact</Link>
        <Link href="/Resources">Resources</Link>
        <Link href="/contact">
          <button className="schedule-button">Schedule Strategy Call</button>
        </Link>
      </div>
    </nav>
  )
}
