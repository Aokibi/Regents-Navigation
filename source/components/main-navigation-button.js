import React from 'react'
import styles from './our-styles.less'

/* Buttons in the menu bar of the main navigation screen. */
class MainNavigationButton extends React.Component {
	render() {
		return (
			<button className={styles['main-navigation-button']}>{this.props.children}</button>
			)
	}
}

export default MainNavigationButton