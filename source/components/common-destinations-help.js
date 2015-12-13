import React from 'react'
import styles from './our-styles.less'
import BackButton from './back-button'

/* Displays help text for the common destinations screen */
class CommonDestinationsHelp extends React.Component {
	render() {
		return (
			<div>
				<div>
					<h1 className={styles['heading']}>Common Destinations Help</h1>
					<h2 className={styles['help-header']}> What is this screen for? </h2>
						<p className={styles['help-text']}> This screen allows you to look at predefined lists of common destinations. </p>
					<h2 className={styles['help-header']}> What do the buttons do? </h2>
						<h3> All </h3>
							<p className={styles['help-text']}> This button lets you look at all of the rooms in Regents. </p>
						<h3> Classrooms </h3>
							<p className={styles['help-text']}> This button lets you look at the list of common classrooms. </p>
						<h3> Labs </h3>
							<p className={styles['help-text']}> This button lets you look at the list of common lab rooms. </p>
						<h3> Offices </h3>
							<p className={styles['help-text']}> This button lets you look at the list of common professor's offices. </p>				
						<h3> Restricted </h3>
							<p className={styles['help-text']}> This button lets you look at the list of common rooms that have restricted access privileges. </p>	
				</div>
				<div>
					<BackButton link_to='/commondestinations'/>
				</div>
			</div>
		)
	}
}

export default CommonDestinationsHelp