import React from 'react'

import AssetCard from '../AssetCard.js'
import { TextButton }  from 'components' 

import styles from './AssetGraphCard.module.css'

import graph from './assets/graph-template.svg'

const AssetGraphCard = (props) => {

    return (
        <AssetCard
            title={props.title}
        >
        <div className={styles.filters}>
            <TextButton toggleable={true}>D</TextButton>
            <TextButton toggleable={true}>M</TextButton>
            <TextButton toggleable={true}>Y</TextButton>
        </div>
        <img className={styles.graph} src={graph} />
        </AssetCard>
    )
}

export default AssetGraphCard