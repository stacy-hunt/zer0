import React from 'react'

import ValidatedInputStyle from '../styles/ValidatedInput.module.css'

const ValidatedInput = (props) => {

	return(
		<div className={ValidatedInputStyle.validatedInput + ' ' + ValidatedInputStyle.valid}>
			<input type='text'/>
			<div className={ValidatedInputStyle.symbol}></div>
		</div>
	)
}

export default ValidatedInput