import React from 'react'
import MainMenuButton from './main-menu-button'
import HelpButton from './help-button'
import SavedNavigation from './saved-navigation'
import styles from './our-styles.less'
//import range from 'lodash/utility/range'
//import map from 'lodash/collection/map'

/* The screen that displays a table of saved navigations. The user
	can resume a route by selecting its start or end location. */
class SavedNavigationScreen extends React.Component {
	render() {
		return (
			<div>
				<div>
					<h1 className={styles['heading']}>Saved Sessions</h1>
				</div>
				<div>
					<table className={styles['table']}>
						<thead>
						<tr>
							<th>Start Point</th>
							<th>Destination</th>
						</tr>
						</thead>
						<tbody>
							<SavedNavigation destination='test' startinglocation='test1'/>
						</tbody>
					</table>
				</div>
				<div>
					<MainMenuButton/>
					<HelpButton link_to= '/savednavigationhelp'/>
				</div>
			</div>
		)
	}
}

export default SavedNavigationScreen
