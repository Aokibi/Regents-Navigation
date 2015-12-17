import React from 'react'
import styles from './our-styles.less'

/* Rectangular button
Not used on the main navigation page -- those buttons are in main-navigation-button.js
Not used on the settings screen color scheme section -- those buttons are in settings-button.js */
class Button extends React.Component {
	render() {
		return (
			<button className={styles['button']}>
				{this.props.children}
			</button>
		)
	}
}
export default Button