//- Global stylesheets
import './styles/reset.css' // Import first so components styles cascade
import './styles/main.css' // Generic styling

//- React imports
import React, { useEffect, useState } from 'react'

//- Styling

//- Components
import FutureButton from './components/FutureButton'


const App = (props) => {

    return(
        <div>
            <h1>zer0 Component Library</h1>
            <h2>Future Button</h2>
            <p>This one isn't quite done yet - still need access to the Figma doc for the right design assets and the correct colours/blur values, and the animation needs some tweaking</p>
            <div style={{display: 'flex'}}>
                <FutureButton>Label</FutureButton>
                <FutureButton>Big Button Label</FutureButton>
                <FutureButton>Even Bigger Button Label, Damn That's A Big Label</FutureButton>
            </div>
        </div>
    )
}

export default App