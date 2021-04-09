import React from 'react'

import AssetCard from '../AssetCard.js' // Parent component

//- Styles
import styles from './AssetPriceCard.module.css' 

const AssetPriceCard = (props) => {

    return (
        <AssetCard
            title={props.title}
        >
            <h5 className={`${styles.price} glow-text-white`}>{`$${Number(props.price.toFixed(2)).toLocaleString()}`}</h5>
            <div className={styles.bottom}>
                <span>{`${Number(props.priceInBtc.toFixed(4)).toLocaleString()} BTC`} </span>
                <span className={props.change > 0 ? styles.positive : styles.negative}>{`(${props.change >= 0 ? '+' : ''}${Number(props.change.toFixed(2)).toLocaleString()}%)`}</span>
            </div>
        </AssetCard>
    )
}

export default AssetPriceCard