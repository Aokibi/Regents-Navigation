import React from 'react'
import CategoriesBar from './categories-bar'
import CommonDestination from './common-destination'
import MainMenuButton from './main-menu-button'
import HelpButton from './help-button'
import BackButton from './back-button'
import styles from './our-styles.less'
//import destinations from "../common-destinations.json"

/* Page that displays common destinations within Regents */
class CommonDestinationsScreen extends React.Component {
	render() {
		return(
				<div>
					<div>
						<h1 className={styles['heading']}>Common Destinations</h1>
					</div>
					<div>	
						<CategoriesBar/>
					</div>
					<div>
						<table className={styles['table']}>
							<tbody>
								<CommonDestination name='Test'/>
							</tbody>
						</table>
					</div>
					<div>
					<BackButton link_to='/createnewnavigation'/>
					<MainMenuButton/>
					<HelpButton link_to='/commondestinationshelp'/>
					</div>
				</div>
			)
	}
}

export default CommonDestinationsScreen