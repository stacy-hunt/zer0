import React from 'react'

import SideBarStyles from '../styles/SideBar.module.css'

const SideBar = (props) => {

    return (
    	<div className={SideBarStyles.sideBar}>
    		<div className={SideBarStyles.navigator}>
				<ul className={SideBarStyles.dots}>
					<li></li>
					<li className='selected'></li>
					<li></li>
					<li></li>
				</ul>
				<ul className={SideBarStyles.icons}>
					<li></li>
					<li className='selected'></li>
					<li></li>
					<li></li>
				</ul>
			</div>
    	</div>
    	                    
    )
}

export default SideBar