'use client'
import { useState } from 'react';
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
    const [showLanguageNavbar, setShowLanguageNavbar] = useState(false);
    const [selectedLanguage, setSelectedLanguage] = useState('Language');

    const toggleLanguageNavbar = () => {
        setShowLanguageNavbar(!showLanguageNavbar);
    };

    const handleLanguageChange = (language) => {
        setSelectedLanguage(language);
        setShowLanguageNavbar(false);
    };
    
    return (
        <nav className="">
            <Link href="#" target="_blank">
                <Image
                src="/jolintLogo.jpg"
                width={120}
                height={35.518}
                alt="Jolint logo"
                />
            </Link>
            <div className="navbar">
                <ul>
                    <li><a href="#">How it works</a></li>
                    <li><a href="#">Inclusion</a></li>
                    <li><a href="#">Faq</a></li>
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Contact Us</a></li>
                    <li>
                        <img src="/globe.jpg" alt="Left Image" />
                        <a href="#" onClick={toggleLanguageNavbar}>
                            {selectedLanguage}
                        </a>
                        <img src="/arrowDown.jpg" alt="Right Image" />
                        {showLanguageNavbar && (
                            <ul>
                                <li><a href="#" onClick={() => handleLanguageChange('English')}>English</a></li>
                                <li><a href="#" onClick={() => handleLanguageChange('Swedish')}>Swedish</a></li>
                                <li><a href="#" onClick={() => handleLanguageChange('Spanish')}>Spanish</a></li>
                            </ul>
                        )}
                    </li>
                    <li className='signInButton'><a href="#">Sign in</a></li>
                </ul>
            </div>
        </nav>
    );
};
export default Navbar;