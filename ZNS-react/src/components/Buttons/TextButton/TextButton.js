import React, { useState } from 'react'

import styles from './TextButton.module.css'

const TextButton = (props) => {

    const [ selected, setSelected ] = useState(false)

    const handleClick = () => {
        setSelected(!selected)
        if(props.click) props.click()
    }

    return(
        <button 
            onClick={handleClick}
            className={`${styles.textButton} ${ props.toggleable && selected ? styles.selected : '' }`}
        >
            { props.children }
        </button>
    )
}

export default TextButton