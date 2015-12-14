import React from 'react'
import MainNavigationButton from './main-navigation-button'
import styles from './our-styles.less'

/* Menu bar component for the main navigation screen. */
class MenuBar extends React.Component {
	render() {
		return (
			<div>
				<MainNavigationButton>Search</MainNavigationButton>
				<MainNavigationButton>Save</MainNavigationButton>
				<p className={styles['destination']}>Destination</p>
				<MainNavigationButton>Locations</MainNavigationButton>
				<MainNavigationButton>Labels</MainNavigationButton> <hr/>
			</div>
			)
	}
}

export default MenuBar