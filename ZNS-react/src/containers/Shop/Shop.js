import React, { useState } from 'react'

import styles from './Shop.module.css'

import { TextButton, NFTCard } from 'components'

import NFTService from 'services/nfts.js'


const Shop = (props) => {

    const loggedInAs = 'Frank Wilder'
    const [ NFTs, setNFTs ] = useState(NFTService.getOwnedBy(loggedInAs))
    const [ selected, setSelected ] = useState('ownedBy')

    console.log(selected)

    const getOwnedBy = () => {
        setNFTs(NFTService.getOwnedBy(loggedInAs))
        setSelected('ownedBy')
    }

    const getCreatedBy = () => {
        setNFTs(NFTService.getCreatedBy(loggedInAs))
        setSelected('createdBy')
        console.log(selected)
    }

    return(
        <div className={styles.Shop}>
            <div className={styles.Sections}>
                <TextButton 
                    onClick={getOwnedBy}
                    selected={selected === 'ownedBy'}
                >NFTs You Own</TextButton>
                <TextButton
                    onClick={getCreatedBy}
                    selected={selected === 'createdBy'}
                >NFTs You've Made</TextButton>
                {/* <TextButton toggleable={true}>Offers</TextButton> */}
            </div>
            <ul>
                { NFTs.map(n => 
                    <li key={n.name}><NFTCard NFT={n} /></li>
                ) }
            </ul>
        </div>
    )
}

export default Shop