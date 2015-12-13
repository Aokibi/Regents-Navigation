import React from 'react'
import styles from './our-styles.less'
import MainMenuButton from './main-menu-button'

/* Help page for the main menu */
class MainMenuHelp extends React.Component {
	render() {
		return (
			<div>
				<div>
					<h1 className={styles['heading']}>Main Menu Help</h1>
					<h2 className={styles['help-header']}> What do the buttons do? </h2>
						<h3> Start New Navigation </h3>
							<p className={styles['help-text']}> The Start New Navigation button brings you to a screen that allows you to create a new route.</p>
						<h3> Start Saved Navigation </h3>
							<p className={styles['help-text']}> The Start Saved Navigation button brings you to a screen that allows you to choose a previous route. </p>
						<h3> Settings </h3>
							<p className={styles['help-text']}> The Settings button brings you to a page where you can adjust the color scheme this application uses and see instructions on how to change the text size. </p>
						<h3> About </h3>
							<p className={styles['help-text']}> The About button brings you to a page describing the designers of this application and the intended use of this application. </p>
				</div>
				<div>
					<MainMenuButton link_to='/'/>
				</div>
			</div>
		)
	}
}

export default MainMenuHelp