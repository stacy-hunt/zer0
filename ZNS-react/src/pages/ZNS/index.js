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
        'name': 'Neo-Wilder',
        'ticker': 'NEO',
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
                    price={getRand(85, 400, 2)}
                    priceInBtc={0.0053}
                    change={12.03}
                />
                <AssetPriceCard 
                    title='Wild Price'
                    price={getRand(85, 400, 2)}
                    priceInBtc={0.0042}
                    change={-3.94}
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
            />
        </div>
    )
}

export default ZNS 