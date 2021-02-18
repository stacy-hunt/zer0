import React from 'react'

import WalletStyles from '../styles/Wallet.module.css'

import metamask from "../assets/wallets/metamask.png";
import walletConnect from "../assets/wallets/wallet-connect.png"
import coinbaseWallet from "../assets/wallets/coinbase-wallet.png"
import fortmatic from "../assets/wallets/fortmatic.png"
import portis from "../assets/wallets/portis.png"

const ConnectToWallet = (props) => {

	const images = importAll(require.context('../assets/wallets', false, /\.(png|jpe?g|svg)$/));

	return (
        <div className={WalletStyles.connect}>
            <div className={WalletStyles.header}>
                <h3>Connect to a wallet</h3>
                <button></button>
            </div>
            <ul>
        		<li className={WalletStyles.wallet}>
                	<span>Metamask</span>
                	<img src={metamask} />
            	</li>
        		<li className={WalletStyles.wallet}>
                	<span>Wallet Connect</span>
                	<img src={walletConnect} />
            	</li>
        		<li className={WalletStyles.wallet}>
                	<span>Coinbase Wallet</span>
                	<img src={coinbaseWallet} />
            	</li>
        		<li className={WalletStyles.wallet}>
                	<span>Fortmatic</span>
                	<img src={fortmatic} />
            	</li>
        		<li className={WalletStyles.wallet}>
                	<span>Portis</span>
                	<img src={portis} />
            	</li>
            </ul>
            <div className={WalletStyles.footer}>
                <span>New to Ethereum? <a href='https://ethereum.org/en/wallets/' target='_blank'>Learn more about wallets</a></span>
            </div>
        </div>
    )
}

function importAll(r) {
	return r.keys().map(r);
}

export default ConnectToWallet