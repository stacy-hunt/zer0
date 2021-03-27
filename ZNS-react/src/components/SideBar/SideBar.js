import React from 'react'

import SideBarStyles from './SideBar.module.css'

import icon1 from './assets/1.svg'
import icon2 from './assets/2.svg'
import icon3 from './assets/3.svg'
import icon4 from './assets/4.svg'

const SideBar = (props) => {

    return (
    	<div className={SideBarStyles.sideBar}>
    		<div className={SideBarStyles.navigator}>
				<ul className={SideBarStyles.dots}>
					<li className='purple-border-blur'></li>
				</ul>
				<ul className={SideBarStyles.icons + ' purple-border-blur'}>
					<li>
						<button><img alt="channels" src={icon1} /></button>
					</li>
					<li>
						<button><img alt="tasks" src={icon2} /></button>
					</li>
					<li>
						<button><img alt="feed" src={icon3} /></button>
					</li>
					<li>
						<button><img alt="members" src={icon4} /></button>
					</li>
				</ul>
			</div>
    	</div>
    	                    
    )
}

export default SideBar