//- React imports
import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'

//- Components
import { 
    // AssetGraphCard,
    // AssetMarketCapCard,
    // AssetPriceCard,
    // ConnectToWallet,
    // FutureButton,
    // FilterBar,
    // HorizontalScroll,
    // AssetListTable,
    // TextButton,
    // TitleBar,
    // NextDrop,
    // Overlay,
    // Profile,
    // SearchBar,
    // PreviewCard,
    // SideBar
} from 'components'

import {
    // MintNewNFT,
    // Enlist
} from 'containers'

//- Assets
import logo from 'assets/wilderverse.png'
import ProfileIcon from 'assets/profile-icon.svg'
import ShopIcon from 'assets/shop-icon.svg'
import WalletIcon from 'assets/wallet-icon.svg'

const getRand = (min, max, dp) => {
    var rand = Math.random() < 0.5 ? ((1-Math.random()) * (max-min) + min) : (Math.random() * (max-min) + min);  // could be min or max or anything in between
    var power = Math.pow(10, dp);
    return Math.floor(rand*power) / power;
}

const tableData = [
    {
        'asset': '../assets/wilder.jpg',
        'name': 'Cy-cat',
        'ticker': 'CCAT',
    },
    {
        'asset': '../assets/wilder.jpg',
        'name': 'Frank-Wilder',
        'ticker': 'FRNK',
    },
    {
        'asset': '../assets/wilder.jpg',
        'name': 'Neo-Wilder',
        'ticker': 'NEO',
    },
    {
        'asset': '../assets/wilder.jpg',
        'name': 'Stellar',
        'ticker': 'XLM',
    },
    {
        'asset': '../assets/wilder.jpg',
        'name': 'Dogecoin',
        'ticker': 'DOGE',
    },
    {
        'asset': '../assets/wilder.jpg',
        'name': 'Dash',
        'ticker': 'DASH',
    },
    {
        'asset': '../assets/wilder.jpg',
        'name': 'Maker',
        'ticker': 'MKR',
    },
    {
        'asset': '../assets/wilder.jpg',
        'name': 'Bitcoin',
        'ticker': 'BTC',
    },
    {
        'asset': '../assets/wilder.jpg',
        'name': 'Cardano',
        'ticker': 'ADA',
    },
    {
        'asset': '../assets/wilder.jpg',
        'name': 'Fuse',
        'ticker': 'FUSE',
    },
    {
        'asset': '../assets/wilder.jpg',
        'name': 'Monero',
        'ticker': 'XMR',
    },
    {
        'asset': '../assets/wilder.jpg',
        'name': 'Ethereum',
        'ticker': 'ETH',
    },
    {
        'asset': '../assets/wilder.jpg',
        'name': 'Nano',
        'ticker': 'NANO',
    },
]

const globalFilters = [
    'Zero Networks', 
    'Members', 
    'NFTs', 
    'DAOs', 
    'Universes',
]

const previewData = {
    owner: {
        domain: '0.cyber.n3o',
        img: '/assets/wilderverse.png',
    },
    creator: { 
        domain: '0.wilder.frank',
        img: '/assets/wilderverse.png'
    },
    name: 'CoronaLisa',
    domain: '0.wilder.frank.coronalisa',
    description: 'It’s long been wondered why the Mona Lisa looks so sad. Perhaps she foresaw the current state of the world and empathised with us all.',
    img: '/assets/nft-image-coronalisa.png'
}

// Generate some realistic looking data
tableData.forEach(d => {
    d.changeDay = getRand(-25, 25, 2)
    d.changeWeek = getRand(-200, 200, 2)
    d.trade = getRand(10, 11000, 2)
    d.supply = getRand(1000, 15000, 0)
    d.volume = getRand(d.supply/10, d.supply - (d.supply/10), 0)
    d.value = getRand(d.supply/10, d.supply, 0)
    d.marketCap = d.trade * d.supply
})

const offer = {
    "who": "Crypto Don",
    "nft": "Blue Pill",
    "amountFiat": 123.45,
    "amountCrypto": 0.045,
}



const ZNS = (props) => {

    const [ overlay, setOverlay ] = useState('')
    const [ wallet, setWallet ] = useState(false)

    const openProfile = () => {
        setOverlay('profile')
    }

    const openWallet = () => {
        setOverlay('wallet')
    }

    const openMint = () => {
        setOverlay('mint')
    }

    const openShop = () => {
        setOverlay('shop')
    }

    const closeOverlay = () => {
        setOverlay('none')
    }

    const connectWallet = () => {
        setWallet(true)
        setOverlay('none')
    }

    return(
        <div className='page-spacing'>
            {/* { overlay == 'enlist' && <Overlay close={closeOverlay}><Enlist /></Overlay> }
            { overlay == 'mint' && <Overlay close={closeOverlay}><MintNewNFT /></Overlay> }
            { overlay == 'wallet' && <Overlay close={closeOverlay}><ConnectToWallet onConnect={connectWallet} /></Overlay> }
            { overlay == 'profile' && <Overlay close={closeOverlay}><Profile /></Overlay>}
            <SideBar />
            <FilterBar filters={globalFilters}>
            <TitleBar>
                <div>
                </div>
                <div>
                    <SearchBar style={{width: 243}}/>
                    { wallet && 
                        <>
                            <FutureButton click={openProfile}>Profile</FutureButton>
                            <FutureButton>Wallet</FutureButton>
                        </>
                    }
                    { !wallet && 
                        <FutureButton click={openWallet}>Connect Wallet</FutureButton>
                    }
                </div>
            </TitleBar>
            </FilterBar>
            <PreviewCard 
                name={previewData.name}
                domain={previewData.domain}
                creator={previewData.creator}
                owner={previewData.owner}
                description={previewData.description}
                data={previewData}
                style={{marginBottom: 16, marginTop: 24}}
                img={previewData.img}
            />
            <HorizontalScroll>
                <AssetPriceCard 
                    title='Wild Price'
                    price={getRand(85, 400, 2)}
                    priceInBtc={getRand(0.0001, 0.0090, 4)}
                    change={getRand(-30, 30, 2)}
                />
                <AssetPriceCard 
                    title='Wild Price'
                    price={getRand(85, 400, 2)}
                    priceInBtc={getRand(0.0001, 0.0090, 4)}
                    change={getRand(-30, 30, 2)}
                />
                <AssetGraphCard
                    title='Wild Price'
                />
                <AssetMarketCapCard 
                    title='Total Wild Holders'
                    price={getRand(15000, 40000, 2)}
                />
                <AssetMarketCapCard 
                    title='Total Wild Holders'
                    price={getRand(15000, 40000, 2)}
                />
                <AssetMarketCapCard 
                    title='Total Wild Holders'
                    price={getRand(15000, 40000, 2)}
                />
            </HorizontalScroll>
            <NextDrop 
                title='Futopia'
                artist='Frank Wilder'
                date={new Date(new Date().getTime() + (24 * 60 * 60 * 1000))}
                style={{marginTop: 16}}
            />
            <AssetListTable
                data={tableData}
                style={{marginTop: 16}}
            /> */}
        </div>
    )
}

export default ZNS 