import React from 'react'
import { Link } from 'react-router-dom/dist';
// import Base64 from '../Base64/Base64.js'

function Navbar() {
    return (
        <nav className="p-2 bg-light">
            <Link className="text-2xl relative left-1" to="/">TextMe</Link>
            <Link className="text-black-500 hover:text-blue-800 transition duration-200 ml-4 text-xl" to="/base64">Base64</Link>
            <Link className="text-black-500 hover:text-blue-800 transition duration-200 ml-4 text-xl" to="/about">About</Link>
        </nav>
    );
}

export default Navbar;