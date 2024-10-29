// Navbar.tsx
import React from 'react';
import style from './navbar.module.css'; // Import the CSS module for styles
import Link from 'next/link'; // Import Link from Next.js

const Navbar = () => {
    return (
        <header className={style.navbar}>
            <h1 className={style.logo}>
                <Link href="/">Ngo Archives</Link>
            </h1>
            <nav>
                <ul className={style.navList}>
                    <li>
                        <Link href="/">Home</Link>
                    </li>
                    <li>
                        <Link href="/blogs">Blog</Link>
                    </li>
                    <li>
                        <Link href="/portfolio">Portfolio</Link>
                    </li>
                    <li>
                        <Link href="/resume">Resume</Link>
                    </li>
                    <li>
                        <Link href="/contact">Contact</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Navbar;
