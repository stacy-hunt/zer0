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
    AssetListTable,
    TextButton,
    TitleBar,
    NextDrop,
    Overlay,
    Profile,
    SearchBar,
} from 'components'

//- Assets
import logo from 'assets/wilderverse.png'
import ProfileIcon from 'assets/profile-icon.svg'
import ShopIcon from 'assets/shop-icon.svg'
import WalletIcon from 'assets/wallet-icon.svg'

const tableData = [
    {
        'asset': '../assets/wilder.jpg',
        'name': 'Cy-cat',
        'ticker': 'CCAT',
        'changeDay': 25.21,
        'changeWeek': -3.12,
        'marketCap': 2359643.01,
        'volume': 253140.36,
        'supply': 44112,
        'trade': 12101.33,
    },
    {
        'asset': '../assets/wilder.jpg',
        'name': 'Frank-Wilder',
        'ticker': 'FRNK',
        'changeDay': 15.02,
        'changeWeek': 33.12,
        'marketCap': 239643.01,
        'volume': 253140.36,
        'supply': 443112,
        'trade': 12101.33,
    },
    {
        'asset': '../assets/wilder.jpg',
        'name': 'Neo-Wilder',
        'ticker': 'NEO',
        'changeDay': -5.02,
        'changeWeek': 24.12,
        'marketCap': 23543.01,
        'volume': 253140.36,
        'supply': 44302,
        'trade': 12101.33,
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
            <AssetListTable
                data={tableData}
                style={{marginTop: 16}}
            />
        </div>
    )
}

export default ZNS 