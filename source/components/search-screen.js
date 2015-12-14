import React from 'react'
import CategoriesBar from './categories-bar'
import SearchDestination from './search-destination'
import MainMenuButton from './main-menu-button'
import HelpButton from './help-button'
import BackButton from './back-button'
import styles from './our-styles.less'


/* Allows users to search for a room based on what class is
	held there, what type of room it is, and for an office  
	by using the professor's name. */
class SearchScreen extends React.Component {
	render() {
		return (
			<div>
				<div>
					<h1 className={styles['heading']}>Search</h1>
				</div>
				<div>
					<input type='search' value='Search' className={styles['search']}/>
				</div>
				<div>
					<CategoriesBar/>
				</div>
				<div>
					<table className={styles['table']}>
						<tbody>
							<SearchDestination name='Test'/>
						</tbody>
					</table>
				</div>
				<div>
					<BackButton link_to='/createnewnavigation'/>
					<MainMenuButton/>
					<HelpButton link_to ='/searchscreenhelp'/>
				</div>
			</div>
		)
	}
}

export default SearchScreen