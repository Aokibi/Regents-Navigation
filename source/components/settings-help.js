import React from 'react'
import styles from './our-styles.less'
import BackButton from './back-button'

class SettingsHelp extends React.Component {
	render() {
		return (
			<div>
				<div>
					<h1 className={styles['heading']}>Settings Help</h1>
					<h2 className={styles['help-header']}> What do the color scheme buttons do? </h2>
						<p className={styles['help-text']}> The color scheme buttons allow you to change the color scheme
						of the application. 
							<ul>
								<li>The default is the color scheme the designers created. </li>
								<li>The red/green color scheme is meant for individuals with red or green color blindness. </li>
								<li>The custom color scheme allows you to create your own color scheme. </li>
							</ul>
						</p>
					<h2 className={styles['help-header']}> What are the text size instructions for? </h2>
						<p className={styles['help-text']}> The text size instructions allow you to adjust the size
						of the text displayed on your computer. </p>
				</div>
				<div>
					<BackButton link_to='/settings'/>
				</div>
			</div>
		)
	}
}

export default SettingsHelp