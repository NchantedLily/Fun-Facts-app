import React from 'react'
import { Link, NavLink, withRouter } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="nav-wrapper red darken-3">
            <div className="container">
            <a href="_" className="brand-logo">Fun Facts about Anime</a>
                <ul className="right">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/anime">Anime Japan</Link></li>
                    <li><Link to="/bleach">Bleach</Link></li>
                    <li><Link to="/codeGeass">Code Geass</Link></li>
                </ul>
            </div>
        </nav>
    )
}

export default withRouter(Navbar)