import React from 'react'

import AssetCard from '../AssetCard.js' // Parent component

//- Styles
import styles from './AssetPriceCard.module.css' 

const AssetPriceCard = (props) => {

    return (
        <AssetCard
            title={props.title}
        >
            <h5 className={`${styles.price} glow-text-white`}>{`$${props.price.toFixed(2)}`}</h5>
            <div className={styles.bottom}>
                <span>{`${props.priceInBtc.toFixed(4)} BTC`} </span>
                <span className={props.change > 0 ? styles.positive : styles.negative}>{`(${props.change >= 0 ? '+' : ''}${props.change.toFixed(2)}%)`}</span>
            </div>
        </AssetCard>
    )
}

export default AssetPriceCard