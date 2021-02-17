import React from 'react'

import logo from '../assets/WilderIcon.png'

import SearchBar from './SearchBar'
import BreadCrumb from './BreadCrumb'

import navbarStyles from '../styles/NavBar.module.css'
import buttonStyles from '../styles/Button.module.css'

const NavBar = (props) => {

    return (
        <header>
            <nav>
                <div>
                    <a href=''><img src={logo} /></a>
                    <BreadCrumb style={{marginLeft: 30}} />
                </div>
                <SearchBar />
                <div>
                    <a>Connect Wallet</a>
                    <button className={`${buttonStyles.createNetwork}`}>Create Token<div className={buttonStyles.arrow} /></button>

                </div>
            </nav>
        </header>
    )
}

export default NavBar