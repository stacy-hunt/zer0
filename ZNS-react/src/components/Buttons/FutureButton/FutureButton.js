import React, { useState } from 'react'

import styles from './FutureButtonStyle.module.css'

const FutureButton = (props) => {

    const [ hasHovered, setHovered ] = useState(false)
    const [ isSelected, setSelected ] = useState(false)

    const handleHover = () => {
        setHovered(true)
    }

    const handleClick = () => {
        if(props.click) props.click()
        if(props.togglable) setSelected(!isSelected)
    }

    return (
        <button 
            className={`${styles.futureButton} ${isSelected ? styles.selected : ''}`}
            onMouseEnter={handleHover}
            onMouseUp={handleClick}
            style={props.style}
        >
            { props.icon && <div className={styles.iconImage}></div>}
            <div className={styles.content}>
                { props.children }
            </div>
            <div className={`${styles.wash} ${hasHovered && !isSelected ? styles.hovered : ''}`}></div>
            { props.icon && <div className={styles.iconImage}></div>}
        </button>
    )
}

export default FutureButton