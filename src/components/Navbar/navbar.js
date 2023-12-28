import React from 'react'
import Base64 from '../Base64/Base64.js'

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand ps-3" href="/">TextMe</a>
            <a href={Base64} className="navbar-brand">Base64</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="/navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">

                <span className="navbar-toggler-icon"></span>
            </button>
        </nav>
    );
}

export default Navbar;