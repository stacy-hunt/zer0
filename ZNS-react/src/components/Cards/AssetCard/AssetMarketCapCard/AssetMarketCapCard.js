import React from 'react'

import AssetCard from '../AssetCard.js'

import styles from './AssetMarketCapCard.module.css'

const AssetPriceCard = (props) => {

    return (
        <AssetCard
            title={props.title}
        >
            <h5 className={`${styles.price} glow-text-white`}>{`$${props.price.toFixed(2)}`}</h5>
        </AssetCard>
    )
}

export default AssetPriceCard