import React, { useState } from 'react'

import { ValidatedInput } from 'components'

import MintNewNFTStyle from './MintNewNFT.module.css'

const MintNewNFT = (props) => {

	const uploadImage = () => {
	}

	return (
		<div className={MintNewNFTStyle.mintNewNFT}>
			<div className={MintNewNFTStyle.header}>
				<h1>Mint A New NFT</h1>
				<span>By Frank Wilder</span>
			</div>
			<form>
				<div>
					<div>
						<label>Upload Media File</label>
						<ValidatedInput type='text' />
					</div>
				</div>

				<div>
					<div>
						<label>Title</label>
						<ValidatedInput type='text' />
						<label>Story</label>
						<ValidatedInput type='textarea' style={{height: 200}} />
					</div>
					<div>
						<span>Preview</span>
						<img className={MintNewNFTStyle.preview} />
					</div>
				</div>
				<div>
					<div>
						<label>Your Bid (Ethereum)</label>
						<ValidatedInput type='number' />
						<label>Your Bid (Wild Token)</label>
						<label>W 3.10</label>
					</div>
					<div>
						<label>Currency</label>
						<div></div>
					</div>
				</div>
			</form>
		</div>
	)
}

export default MintNewNFT