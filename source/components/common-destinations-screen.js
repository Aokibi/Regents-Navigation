import React from 'react'
import CategoriesBar from './categories-bar'
import CommonDestination from './common-destination'
import MainMenuButton from './main-menu-button'
import HelpButton from './help-button'
import styles from './our-styles.less'
//import destinations from "../common-destinations.json"

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
						<MainMenuButton/>
						<HelpButton link_to=''/>
					</div>
				</div>
			)
	}
}

export default CommonDestinationsScreen