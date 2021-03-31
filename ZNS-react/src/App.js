//- Global stylesheets
import './styles/reset.css' // Import first so components styles cascade
import './styles/main.css' // Generic styling

//- React imports
import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'

//- Services
import artworkService from './services/artwork'

//- Reducers
import { initializeArtwork } from './reducers/artworkReducer'

//- Styling
// import ButtonStyle from './styles/Button.module.css'

//- Containers

//- Components
import TitleBar from './components/NavBars/TitleBar/TitleBar.js'
import SearchBar from './components/SearchBar/SearchBar.js' // Search bar
import FutureButton from './components/Buttons/FutureButton/FutureButton.js'
import TextButton from './components/Buttons/TextButton/TextButton.js'
import Overlay from './components/Overlay/Overlay.js'
import ConnectToWallet from './components/ConnectToWallet/ConnectToWallet.js'
import Profile from './components/Profile/Profile.js'
import AssetPriceCard from'./components/Cards/AssetCard/AssetPriceCard/AssetPriceCard.js'
import AssetMarketCapCard from './components/Cards/AssetCard/AssetMarketCapCard/AssetMarketCapCard.js'
import HorizontalScroll from './components/HorizontalScroll/HorizontalScroll.js'

//- Assets
import logo from './assets/wilderverse.png'
import ProfileIcon from './assets/profile-icon.svg'
import ShopIcon from './assets/shop-icon.svg'
import WalletIcon from './assets/wallet-icon.svg'

// Just some temporary data for rapid prototyping
const metricCards = [
    {
        'title': 'Wilder Price',
        'amount': 101.33,
        'subtext': '@ 0.0306 BTC (+36.09%)'
    },
    {
        'title': 'Market Cap',
        'amount': 5329582,
        'subtext': 'Fully dilluted market cap for WILD'
    },
    {
        'title': 'Market Cap',
        'amount': 8725188,
        'subtext': 'Fully dilluted market cap for WILD'
    },
    {
        'title': 'Market Cap',
        'amount': 3428145,
        'subtext': 'Fully dilluted market cap for WILD'
    },
    {
        'title': 'Market Cap',
        'amount': 6832190,
        'subtext': 'Fully dilluted market cap for WILD'
    },
    {
        'title': 'Wilder Price',
        'amount': 101.33,
        'subtext': '@ 0.0306 BTC (+36.09%)'
    },
    {
        'title': 'Market Cap',
        'amount': 5329582,
        'subtext': 'Fully dilluted market cap for WILD'
    },
    {
        'title': 'Market Cap',
        'amount': 8725188,
        'subtext': 'Fully dilluted market cap for WILD'
    },
    {
        'title': 'Market Cap',
        'amount': 3428145,
        'subtext': 'Fully dilluted market cap for WILD'
    },
    {
        'title': 'Market Cap',
        'amount': 6832190,
        'subtext': 'Fully dilluted market cap for WILD'
    },
]

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


const App = (props) => {

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
        <div className='darkmode' style={{paddingLeft: 100}}>
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
                <AssetMarketCapCard 
                    title='Total Wild Holders'
                    price={23024.52}
                />
            </HorizontalScroll>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        artwork: state.artwork,
    }
}
const mapDispatchToProps = { initializeArtwork }

const ConnectedApp = connect(mapStateToProps, mapDispatchToProps)(App)
export default ConnectedApp