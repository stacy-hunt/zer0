import React from 'react'

import MetricStyles from '../styles/Metrics.module.css'

const HorizontalScroll = (props) => {

    return (
    	<div className={MetricStyles.bar}>
    		{props.children}
    		<div style={{width: 0, minWidth: 0, marginLeft: 48, opacity: 0}}>hi</div>
    	</div>
    	                    
    )
}

export default HorizontalScroll