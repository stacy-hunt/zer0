import React from 'react'

import CopyInput from '../CopyInput/CopyInput.js'

import ProfileStyle from './Profile.module.css'

import qr from './assets/qr.png'
import eth from './assets/eth.svg'
import dp from './assets/wilder.jpg'

const Profile = (props) => {

	return (
		<div className={ProfileStyle.profile}>
			<div className={ProfileStyle.header}>
				<h3>Profile</h3>
			</div>
			<div className={ProfileStyle.body}>
				<div>
					<img className={ProfileStyle.dp} src={dp} />
					<span className={ProfileStyle.name}>Frank Wilder</span>
					<a className={ProfileStyle.endpoint}>0://wilderworld.frank</a>
				</div>
				<div>
					<p>Hey I’m Frank and I like staring into the night sky and imagining myself in another galaxy. I’m so passionate about space travel that I spend the majority of my time making animated short films about it. With the magic of CGI, I can make worlds and journeys so real that I can almost taste the synthetic beef that comes out of the assembler!<br/><br/>Join me on one or all of my journeys, I welcome you aboard!</p>
				</div>
			</div>
		</div>
	)
}

export default Profile