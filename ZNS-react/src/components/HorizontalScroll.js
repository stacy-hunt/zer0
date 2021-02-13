import React from 'react'

import MetricStyles from '../styles/Metrics.module.css'

const HorizontalScroll = (props) => {

    return (
    	<div className={MetricStyles.bar}>
    		{props.children}
    	</div>
    	                    
    )
}

export default HorizontalScroll