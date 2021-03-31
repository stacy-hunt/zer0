import React from 'react'

import titlebarStyles from './TitleBar.module.css'

const TitleBar = (props) => {

    return (
        <header style={props.style}>
            <nav className={`${titlebarStyles.TitleBar} border-primary blur`}>
                {props.children}
            </nav>
        </header>
    )
}

export default TitleBar