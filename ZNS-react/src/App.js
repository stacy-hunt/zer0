//- Global stylesheets
import './styles/reset.css' // Import first so components styles cascade
import './styles/main.css' // Generic styling

//- React imports
import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'

//- Services
import artworkService from './services/artwork'

//- Reducers
import { initializeArtwork } from './reducers/artworkReducer'

//- Components
import NavBar from './components/NavBar'
import MetricBar from './components/MetricBar'
import Table from './components/Table'
import HorizontalScroll from './components/HorizontalScroll'
import MetricCard from './components/MetricCard'

// Just some temporary data for rapid prototyping
const metricCards = [
    {
        'title': 'Wilder Price',
        'amount': 101.33,
        'subtext': '@ 0.0306 BTC (+36.09%)'
    },
    {
        'title': 'Market Cap',
        'amount': 369000101,
        'subtext': 'Fully dilluted market cap for WILD'
    },
    {
        'title': 'Market Cap',
        'amount': 369000101,
        'subtext': 'Fully dilluted market cap for WILD'
    },
    {
        'title': 'Market Cap',
        'amount': 369000101,
        'subtext': 'Fully dilluted market cap for WILD'
    },
    {
        'title': 'Market Cap',
        'amount': 369000101,
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
        'marketCap': 11081181.01,
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
        'volume': 1200.15,
        'changeDay': -4.02,
        'changeWeek': 33.12,
        'marketCap': 11081181.01,
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
        'volume': 1200.15,
        'changeDay': -4.02,
        'changeWeek': 33.12,
        'marketCap': 11081181.01,
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
        'volume': 1200.15,
        'changeDay': -4.02,
        'changeWeek': 33.12,
        'marketCap': 11081181.01,
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


const App = (props) => {
    // Will implement this properly when we add Redux
    useEffect(() => {
        props.initializeArtwork()
    }, [])

    return (
        <div style={{paddingLeft: 205}}>
            <NavBar />
            <h1 className='glow' style={{marginBottom: 28}}>Metrics (Duplicate results to show horizontal scroll)</h1>
            <HorizontalScroll>
                {metricCards.map(card =>
                    <MetricCard data={card} /> 
                )}
            </HorizontalScroll>
            <h1 className='glow' style={{marginTop: 48, marginBottom: 28}}>Discover (Duplicate results to show horizontal scroll)</h1>
            <HorizontalScroll>
                <Table data={tableData} />
                <Table data={tableData.slice(2)} />
                <Table data={tableData.slice(1)} />
            </HorizontalScroll>
            <div className='haze'></div>
        </div>
    )
}

// <MetricBar data={metricCards} />
// Will implement this properly when we add Redux
const mapStateToProps = (state) => {
    return {
        artwork: state.artwork,
    }
}
const mapDispatchToProps = { initializeArtwork }

const ConnectedApp = connect(mapStateToProps, mapDispatchToProps)(App)
export default ConnectedApp