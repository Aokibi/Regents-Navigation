import React from 'react'
import styles from './our-styles.less'
import BackButton from './back-button'

/* Displays help text for the search screen */
class SearchScreenHelp extends React.Component {
	render() {
		return (
			<div>
				<div>
					<h1 className={styles['heading']}>Search Screen Help</h1>
					<h2 className={styles['help-header']}> What does the search field do? </h2>
						<p className={styles['help-text']}> The search field allows you to enter a location to search for. You can search
						using the following:
						<ul>
							<li> Room number -- example: RNS 202 </li>
							<li> Professor's name -- example: Charles Huff </li>
							<li> Course name -- example: CHEM 125 </li>
						</ul>
						</p>
					<h2 className={styles['help-header']}> What do the buttons do? </h2>
						<h3> All </h3>
							<p className={styles['help-text']}> This button lets you look at all of the rooms in Regents. </p>
						<h3> Classrooms </h3>
							<p className={styles['help-text']}> This button lets you look at the list of classrooms. </p>
						<h3> Labs </h3>
							<p className={styles['help-text']}> This button lets you look at the list of lab rooms. </p>
						<h3> Offices </h3>
							<p className={styles['help-text']}> This button lets you look at the list of professor's offices. </p>				
						<h3> Restricted </h3>
							<p className={styles['help-text']}> This button lets you look at the list of rooms that have restricted access privileges. </p>				
				</div>
				<div>
					<BackButton link_to='/search'/>
				</div>
			</div>
		)
	}
}

export default SearchScreenHelp