import React from 'react'
import BackButton from './back-button'
import styles from './our-styles.less'

class MainNavigationHelp extends React.Component {
	render() {
		return (
			<div>
				<h1 className={styles['heading']}>Main Navigation Help</h1>
				<h2 className={styles['help-header']}> What do the buttons do? </h2>
					<h3> Search </h3>
						<p className={styles['help-text']}> The Search button takes you back to the Search screen.</p>					
					<h3> Save </h3>
						<p className={styles['help-text']}> The Save button saves your current route and adds the route to the Saved Sessions table.</p>				
					<h3> Locations </h3>
						<p className={styles['help-text']}> The Locations button takes you back to the Common Destinations screen.</p>				
					<h3> Labels </h3>
						<p className={styles['help-text']}> The Labels button toggles the visibility of room numbers in the 3D view.</p>				
				<h2 className={styles['help-header']}> Did you know? </h2>
					<p className={styles['help-text']}> If you click on the 2D floor map, it brings you to a larger view of the floor map. </p>
					<p className={styles['help-text']}> You can move through the 3D window in all directions. </p>
				<BackButton link_to='/navigation'/>
			</div>
		)
	}
}

export default MainNavigationHelp