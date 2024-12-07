'use client'

import React, { useState } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import styles from './NavBar.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import asyncdevlogo from "../../assets/logo/asyncdevlogo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarContainer}>
        <div className={styles.navbarHeader}>
          <div className={styles.logoGroup}>
            <Link href="/" className={styles.navbarLogo}>
              <Image
                src={asyncdevlogo}
                alt="AsyncDev Logo"
                width={50}
                height={50}
                priority
              />
            </Link>
            <Link href="/"><h1 className={styles.title}>AsyncDev</h1></Link>
          </div>
          
          <button 
            className={styles.mobileToggle}
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-label="Toggle navigation"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <div className={`${styles.navbarContent} ${isOpen ? styles.isOpen : ''}`}>
          <div className={styles.navbarLinks}>
            <Link href="/Services" className={styles.navLink} onClick={handleLinkClick}>Services</Link>
            <Link href="/Technology" className={styles.navLink} onClick={handleLinkClick}>Technology</Link>
            <Link href="/About" className={styles.navLink} onClick={handleLinkClick}>About</Link>
            <Link href="/Resources" className={styles.navLink} onClick={handleLinkClick}>Resources</Link>
            <Link href="/Contact" className={styles.navLink} onClick={handleLinkClick}>Contact</Link>
          </div>

          <Link href="/Contact" className={styles.scheduleButton}>
            Schedule Strategy Call
            <ArrowUpRight className={styles.arrowIcon} />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
