import React from 'react'

const Overlay = ({ close, children }) => {

	const closeOverlay = (e) => {
		if(e.target.classList.value.indexOf('overlay') > -1) close()
	}

	return (
		<div onClick={closeOverlay} style={{
			width: '100%', height: '100vh', 
			display: 'flex', alignItems: 'center', 
			justifyContent: 'center',
			position: 'fixed',
			top: 0,
			left: 0,
			zIndex: 100,
		}} className='blur overlay'>
			{children}
		</div>
	)
}

export default Overlay