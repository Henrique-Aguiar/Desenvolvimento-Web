import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'

export const Menu = () => {
    return (
        <div className='link'>
            <Link to={'/'}>Home</Link>
            <Link to={'/about'}>About</Link>
        </div>
    );
};