import React from 'react'
import styles from './our-styles.less'

/* The buttons used in the settings screen for the color scheme settings. */
class SettingsButton extends React.Component {
	render() {
		return (
			<button className={styles['settings-button']}>
				{this.props.children}
			</button>
			)
	}
}

export default SettingsButton