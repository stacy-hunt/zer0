import React, { useState } from 'react'

import styles from './Shop.module.css'

import { TextButton, NFTCard } from 'components'

import NFTService from 'services/nfts.js'


const Shop = (props) => {

    const loggedInAs = 'Frank Wilder'
    const [ NFTs, setNFTs ] = useState(NFTService.getOwnedBy(loggedInAs))

    const getOwnedBy = () => {
        setNFTs(NFTService.getOwnedBy(loggedInAs))
    }

    const getCreatedBy = () => {
        setNFTs(NFTService.getCreatedBy(loggedInAs))
    }

    return(
        <div className={styles.Shop}>
            <div className={styles.Sections}>
                <TextButton 
                    toggleable={true}
                    click={getOwnedBy}
                >NFTs You Own</TextButton>
                <TextButton 
                    toggleable={true}
                    click={getCreatedBy}
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