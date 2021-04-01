//- React imports
import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'

//- Components
import { 
    AssetGraphCard,
    AssetMarketCapCard,
    AssetPriceCard,
    ConnectToWallet,
    FutureButton,
    HorizontalScroll,
    TextButton,
    TitleBar,
    NextDrop,
    Overlay,
    Profile,
    SearchBar,
} from '../../components/index.js'

//- Assets
import logo from '../../assets/wilderverse.png'
import ProfileIcon from '../../assets/profile-icon.svg'
import ShopIcon from '../../assets/shop-icon.svg'
import WalletIcon from '../../assets/wallet-icon.svg'

const tableData = [
    {
        'asset': '../assets/wilder.jpg',
        'name': 'Coronalisa',
        'volume': 1200.15,
        'changeDay': -4.02,
        'changeWeek': 33.12,
        'marketCap': 23589643.01,
        'week': [
            10,
            10,
            10,
            10,
            10,
        ],
        'trade': 12101.33,
    },
    {
        'asset': '../assets/wilder.jpg',
        'name': 'Cyber Mo',
        'volume': 3215.53,
        'changeDay': -13.11,
        'changeWeek': -1.12,
        'marketCap': 12357325.01,
        'week': [
            10,
            10,
            10,
            10,
            10,
        ],
        'trade': 901.33,
    },
    {
        'asset': '../assets/wilder.jpg',
        'name': 'Coronalisa',
        'volume': 7821.93,
        'changeDay': 30.45,
        'changeWeek': 50.60,
        'marketCap': 6439025.01,
        'week': [
            10,
            10,
            10,
            10,
            10,
        ],
        'trade': 12101.33,
    },
    {
        'asset': '../assets/wilder.jpg',
        'name': 'Cyber Mo',
        'volume': 12355.62,
        'changeDay': -32.53,
        'changeWeek': 15.26,
        'marketCap': 5932015.01,
        'week': [
            10,
            10,
            10,
            10,
            10,
        ],
        'trade': 901.33,
    },
]

const offer = {
    "who": "Crypto Don",
    "nft": "Blue Pill",
    "amountFiat": 123.45,
    "amountCrypto": 0.045,
}


const ZNS = (props) => {

    const [ overlay, setOverlay ] = useState('none')
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
        <div className='darkmode' style={{paddingLeft: 100, paddingRight: 88}}>
            { overlay == 'wallet' && <Overlay close={closeOverlay}><ConnectToWallet onConnect={connectWallet} /></Overlay> }
            { overlay == 'profile' && <Overlay close={closeOverlay}><Profile /></Overlay>}
            <TitleBar style={{marginTop: 30, paddingRight: 90, paddingLeft: 100}}>
                <div>
                    <TextButton toggleable={true}>Zero Networks</TextButton>
                    <TextButton toggleable={true}>Members</TextButton>
                </div>
                <div>
                    <SearchBar />
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
            <HorizontalScroll>
                <AssetPriceCard 
                    title='Wild Price'
                    price={230.1}
                    priceInBtc={0.0053}
                    change={12.03}
                />
                <AssetPriceCard 
                    title='Wild Price'
                    price={153.2}
                    priceInBtc={0.0042}
                    change={-3.94}
                />
                <AssetGraphCard
                    title='Wild Price'
                />
                <AssetMarketCapCard 
                    title='Total Wild Holders'
                    price={23024.52}
                />
                <AssetMarketCapCard 
                    title='Total Wild Holders'
                    price={23024.52}
                />
                <AssetMarketCapCard 
                    title='Total Wild Holders'
                    price={23024.52}
                />
            </HorizontalScroll>
            <NextDrop 
                title='Futopia'
                artist='Frank Wilder'
                date={new Date(new Date().getTime() + (24 * 60 * 60 * 1000))}
                style={{marginTop: 16}}
            />
        </div>
    )
}

export default ZNS 