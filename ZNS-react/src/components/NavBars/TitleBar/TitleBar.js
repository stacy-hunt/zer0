import React from 'react'

import titlebarStyles from './TitleBar.module.css'

const TitleBar = (props) => {
    return (
            <nav className={`${titlebarStyles.TitleBar} border-primary blur`}>
                {props.children}
            </nav>
    )
}

export default TitleBar