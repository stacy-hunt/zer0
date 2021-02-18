import React from 'react'

const Overlay = (props) => {

	return (
		<div style={{
			width: '100%', height: '100vh', 
			display: 'flex', alignItems: 'center', 
			justifyContent: 'center',
			position: 'fixed',
			top: 0,
			left: 0,
			zIndex: 100,
		}} className='blur'>
			{props.children}
		</div>
	)
}

export default Overlay