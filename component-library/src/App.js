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
            <p>Status: WIP</p>
            <div style={{display: 'flex'}}>
                <FutureButton>Option 1</FutureButton>
                <FutureButton style={{marginLeft: 32}}>Option 2</FutureButton>
            </div>
        </div>
    )
}

export default App