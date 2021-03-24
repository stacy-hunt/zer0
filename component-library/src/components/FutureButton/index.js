import React, { useState } from 'react'

import styles from './FutureButtonStyle.module.css'

const FutureButton = (props) => {

    const [ hasHovered, setHovered ] = useState(false)

    const handleHover = () => {
        setHovered(true)
    }

    return (
        <button 
            className={styles.futureButton}
            onMouseEnter={handleHover}
        >
            <div className={styles.iconImage}></div>
            <div className={styles.content}>
                { props.children }
            </div>
            <div className={`${styles.wash} ${hasHovered ? styles.hovered : ''}`}></div>
            <div className={styles.iconImage}></div>
        </button>
    )
}

export default FutureButton