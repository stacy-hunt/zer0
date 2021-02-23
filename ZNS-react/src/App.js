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
import ButtonStyle from './styles/Button.module.css'

//- Components
import NavBar from './components/NavBar'
import MetricBar from './components/MetricBar'
import Table from './components/Table'
import HorizontalScroll from './components/HorizontalScroll'
import MetricCard from './components/MetricCard'
import SideBar from './components/SideBar'
import ConnectToWallet from './components/ConnectToWallet'
import Profile from './components/Profile'
import Offer from './components/Offer'
import Overlay from './components/Overlay'
import MintNewNFT from './components/MintNewNFT'
import BreadCrumb from './components/BreadCrumb'
import SearchBar from './components/SearchBar'
import ButtonTray from './components/ButtonTray'

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
        <div style={{paddingLeft: 168}}>
            { overlay == 'profile' && <Overlay close={closeOverlay}><Profile /></Overlay>}
            { overlay == 'wallet' && <Overlay close={closeOverlay}><ConnectToWallet onConnect={connectWallet} /></Overlay> }
            { overlay == 'mint' && <Overlay close={closeOverlay}><MintNewNFT /></Overlay> }
            <NavBar>
                <div>
                    <a href=''><img src={logo} /></a>
                    <BreadCrumb style={{marginLeft: 30}} />
                </div>
                <SearchBar />
                <div>
                    <ButtonTray>
                        { wallet && 
                            <>
                            <button onClick={openMint}><img src={ShopIcon} /></button>
                            <button onClick={openProfile}><img src={ProfileIcon} /></button>
                            </>
                        }
                        { !wallet &&
                            <div>
                                <button onClick={openWallet}><img src={WalletIcon} /></button>
                            </div>
                        }
                    </ButtonTray>
                </div>
            </NavBar>

            <SideBar />
            <HorizontalScroll>
                {metricCards.map(card =>
                    <MetricCard data={card} /> 
                )}
            </HorizontalScroll>

            <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: 11, marginTop: 32, maxWidth: 1225}}>
                <div style={{display: 'flex', alignItems: 'center'}}>
                    <h1>Zer0 Networks</h1> 
                    <h2 style={{marginLeft: 71}}>0:/Wilder.frank</h2>
                    <button style={{width: 184, height: 45, marginLeft: 125}} className={ButtonStyle.accept}>New Drops</button>
                </div>
                <div>
                    <SearchBar />
                </div>
            </div> 

            <HorizontalScroll>
                <Table data={tableData} />
                <Table data={tableData.slice(2)} />
                <Table data={tableData.slice(1)} />
            </HorizontalScroll>
            <div className='haze'></div>
        </div>
    )
}

// Will implement this properly when we add Redux
const mapStateToProps = (state) => {
    return {
        artwork: state.artwork,
    }
}
const mapDispatchToProps = { initializeArtwork }

const ConnectedApp = connect(mapStateToProps, mapDispatchToProps)(App)
export default ConnectedApp