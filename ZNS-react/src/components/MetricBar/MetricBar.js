import React from 'react'

import MetricStyles from './MetricBar.module.css'
import MetricCard from '../MetricCard/MetricCard.js'

const MetricBar = (props) => {

    return (
    	<div className={MetricStyles.bar}>
    		{props.data.map(card =>
    			<MetricCard data={card} /> 
            )}
    	</div>
    	                    
    )
}

export default MetricBar