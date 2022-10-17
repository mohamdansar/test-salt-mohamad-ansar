import { useState } from 'react';
import { Link } from 'react-router-dom';
import CompanyLogo from '../image/company-logo.svg'
const Navbar = () => {
    const [showMobileNav, setShowMobileNav] = useState(false);

    const navToggle = () => {
        setShowMobileNav(!showMobileNav)
    }
    return (
        <div>
        <nav className="fixed w-full p-6 border-b-2 z-40 bg-white">
        {/* Flex Container For All Items */}
        <div className="flex items-center justify-between">
             {/* Flex Container For Logo/Menu  */}
            <div className="flex items-center space-x-20">
            {/* Logo  */}
                <img src={CompanyLogo} alt="" />
            </div>

            {/* Right  Menu  */}
            <div className="hidden items-center space-x-6 font-bold text-grayishViolet lg:flex">
                <Link to="#" className="text-grayishViolet hover:text-veryDarkViolet">Who We Are</Link>
                <Link to="#" className="text-grayishViolet hover:text-veryDarkViolet">Our Values</Link>
                <Link to="#" className="text-grayishViolet hover:text-veryDarkViolet">The Perks</Link>
            </div>

             {/* Hamburger Button  */}
            <button
            id="menu-btn"
            className={`block hamburger lg:hidden focus:outline-none ${showMobileNav ? "open" : ""}`}
            type="button"
            onClick={navToggle}
            >
            <span className="hamburger-top"></span>
            <span className="hamburger-middle"></span>
            <span className="hamburger-bottom"></span>
            </button>
        </div>

        {/* Mobile Menu  */}
        {showMobileNav && 
            <div id="menu" className="absolute p-6 rounded-lg bg-darkViolet left-6 right-6 top-20 z-100">
                <div className="flex flex-col items-center justify-center w-full space-y-6 font-bold text-white rounded-sm">
                    <Link to="#" className="w-full text-center">Who We Are</Link>
                    <Link to="#" className="w-full text-center">Our Values</Link>
                    <Link to="#" className="w-full text-center">The Perks</Link>
                </div>
            </div>
        }
        </nav>
    </div>
    )
}

export default Navbar;