import React from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate()

    const home = () => {
        navigate('/Home')
    }
    const about = () => {
        navigate('/About')
    }
    const contact = () => {
        navigate('/Contact')
    }
    return (
        <>
            <div>Navbar</div>
            <ul>
                <li><Link to='/home' onClick={home}>home</Link></li>
                <li><Link to='/about' onClick={about}>about</Link></li>
                <li><Link to='/contact' onClick={contact}>contact</Link></li>
            </ul>
            <Outlet />
        </>
    )
}

export default Navbar