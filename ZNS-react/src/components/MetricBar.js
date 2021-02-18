import React from 'react'

import MetricStyles from '../styles/Metrics.module.css'
import MetricCard from '../components/MetricCard'

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