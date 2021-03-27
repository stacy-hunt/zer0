import React from 'react'

import MetricStyles from './MetricCard.module.css'

const MetricCard = (props) => {

    return (
        <div className={MetricStyles.assetCard + ' purple-border-blur'}>
        	<h4>{props.data.title}</h4>
        	<span className={MetricStyles.amount}>{'$' + props.data.amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</span>
        	<span className={MetricStyles.subtext}>{props.data.subtext}</span>
        </div>
   	) 
}

export default MetricCard 