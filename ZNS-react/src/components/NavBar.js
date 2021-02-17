import React from 'react'

import logo from '../assets/wilderverse.png'

import SearchBar from './SearchBar'
import BreadCrumb from './BreadCrumb'
import ButtonTray from './ButtonTray'

import navbarStyles from '../styles/NavBar.module.css'
import buttonStyles from '../styles/Button.module.css'

import ProfileIcon from '../assets/profile-icon.svg'
import WalletIcon from '../assets/wallet-icon-2.svg'

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
                    <ButtonTray>
                        <button><img src={WalletIcon} /></button>
                        <button><img src={ProfileIcon} /></button>
                    </ButtonTray>
                </div>
            </nav>
        </header>
    )
}

export default NavBar