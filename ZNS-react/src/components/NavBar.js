import React from 'react'

import navbarStyles from '../styles/NavBar.module.css'
import buttonStyles from '../styles/Button.module.css'

const NavBar = (props) => {

    return (
        <header>
            <nav>
                {props.children}
            </nav>
        </header>
    )
}

export default NavBar