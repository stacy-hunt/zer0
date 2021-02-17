import React from 'react'

import SideBarStyles from '../styles/SideBar.module.css'

import icon1 from '../assets/sidebar-icons/1.svg'
import icon2 from '../assets/sidebar-icons/2.svg'
import icon3 from '../assets/sidebar-icons/3.svg'
import icon4 from '../assets/sidebar-icons/4.svg'

const SideBar = (props) => {

    return (
    	<div className={SideBarStyles.sideBar}>
    		<div className={SideBarStyles.navigator}>
				<ul className={SideBarStyles.dots}>
					<li className='purple-border-blur'></li>
				</ul>
				<ul className={SideBarStyles.icons + ' purple-border-blur'}>
					<li>
						<button><img src={icon1} /></button>
					</li>
					<li>
						<button><img src={icon2} /></button>
					</li>
					<li>
						<button><img src={icon3} /></button>
					</li>
					<li>
						<button><img src={icon4} /></button>
					</li>
				</ul>
			</div>
    	</div>
    	                    
    )
}

export default SideBar