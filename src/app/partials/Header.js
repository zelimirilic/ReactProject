import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <nav className='deep-purple lighten-2'>

            <div className="nav-wrapper container ">
                <Link to="/mainPage" className="brand-logo">BIT Book</Link>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><Link to="/feed">Feed</Link></li>
                    <li><Link to="/people">People</Link></li>
                    <li><Link to="/profile">Profile</Link></li>
                </ul>
            </div>
        </nav >
    )
}
export { Header }
