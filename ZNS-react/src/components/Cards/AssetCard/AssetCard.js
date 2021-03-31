import React from 'react'

import styles from './AssetCard.module.css'

const AssetCard = (props) => {
    return(
        <div className={`${styles.AssetCard} border-primary border-rounded blur`}>
            <div style={{display: 'flex'}}>
                <h4 className='glow-text-blue'>{props.title}</h4><button className={styles.infoButton}></button>
            </div>
            {props.children}
        </div>
    )
}

export default AssetCard