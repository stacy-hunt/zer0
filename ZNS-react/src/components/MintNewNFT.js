import React from 'react'

import ValidatedInput from './ValidatedInput'

import MintNewNFTStyle from '../styles/MintNewNFT.module.css'

const MintNewNFT = (props) => {

	const uploadImage = () => {
		console.log('yeet')
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
						<ValidatedInput />
					</div>
				</div>

				<div>
					<div>
						<label>Title</label>
						<ValidatedInput />
						<label>Story</label>
						<textarea />
					</div>
					<div>
						<span>Preview</span>
						<img className={MintNewNFTStyle.preview} />
					</div>
				</div>
				<div>
					<div>
						<label>Your Bid (Ethereum)</label>
						<ValidatedInput />
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