import React from 'react'
import { Link } from 'react-router-dom/dist';
// import Base64 from '../Base64/Base64.js'

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link className="navbar-brand relative left-1" to="/">TextMe</Link>
            <Link className="navbar-brand " to="/base64">Base64</Link>
            <Link className="navbar-brand " to="/about">About</Link>

            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="/navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">

                <span className="navbar-toggler-icon"></span>
            </button>
        </nav>
    );
}

export default Navbar;