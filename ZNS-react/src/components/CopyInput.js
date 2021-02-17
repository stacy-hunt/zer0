import React from 'react'

import CopyInputStyle from '../styles/CopyInput.module.css'


const CopyInput = (props) => {

	return (
		<div className={CopyInputStyle.wallet}>
			<input type='text' value={props.value}></input>
			<button></button>
		</div>
	)
}

export default CopyInput