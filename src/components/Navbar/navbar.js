import React from 'react'
import { Link } from 'react-router-dom/dist';
// import Base64 from '../Base64/Base64.js'

function Navbar() {
    return (
        <nav className="p-2 bg-light">
            <Link className="text-2xl relative left-1" to="/">TextMe</Link>
            <Link className="text-black-500 hover:text-blue-800 transition duration-200 ml-4 text-xl" to="/base64">Base64</Link>
            <Link className="text-black-500 hover:text-blue-800 transition duration-200 ml-4 text-xl" to="/about">About</Link>

            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="/navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">

                <span className="navbar-toggler-icon"></span>
            </button>
        </nav>
    );
}

export default Navbar;