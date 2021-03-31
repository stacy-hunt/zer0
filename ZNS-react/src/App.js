//- Global stylesheets
import './styles/reset.css' // Import first so components styles cascade
import './styles/main.css' // Generic styling

//- React imports
import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'

//- Services
import artworkService from './services/artwork'

//- Pages
import ZNSHome from './pages/ZNS'

//- Reducers
import { initializeArtwork } from './reducers/artworkReducer'

const App = (props) => {

    return(
        <ZNSHome />
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