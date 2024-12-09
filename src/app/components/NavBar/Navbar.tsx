'use client'

import React, { useState } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import "./NavBar.scss"
import Link from 'next/link';
import Image from 'next/image';
import asyncdevlogo from "../../assets/logo/asyncdevlogo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbarContainer">
        <div className="navbarHeader">
          <div className="logoGroup">
            <Link href="/" className="navbarLogo">
              <Image
                src={asyncdevlogo}
                alt="AsyncDev Logo"
                width={50}
                height={50}
                priority
              />
            </Link>
            <Link href="/"><h1 className="title">AsyncDev</h1></Link>
          </div>
          
          <button 
            className="mobileToggle"
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-label="Toggle navigation"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <div className={`navbarContent ${isOpen ? 'isOpen' : ''}`}>
          <div className="navbarLinks">
            <Link href="/Services" className="navLink" onClick={handleLinkClick}>Services</Link>
            <Link href="/Technology" className="navLink" onClick={handleLinkClick}>Technology</Link>
            <Link href="/About" className="navLink" onClick={handleLinkClick}>About</Link>
            <Link href="/Resources" className="navLink" onClick={handleLinkClick}>Resources</Link>
            <Link href="/Contact" className="navLink" onClick={handleLinkClick}>Contact</Link>
          </div>

          <Link href="/Contact" className="scheduleButton">
            Schedule Strategy Call
            <ArrowUpRight className="arrowIcon" />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
