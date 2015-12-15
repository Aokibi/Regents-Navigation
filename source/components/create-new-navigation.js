import React from 'react'
import { Link } from 'react-router'
import StartingLocation from './starting-location'
import EndingLocation from './ending-location'
import Button from './button'
import MainMenuButton from './main-menu-button'
import HelpButton from './help-button'
import styles from './our-styles.less'

/* Page for starting a new navigation. */
class CreateNewNavigation extends React.Component {
	render() {
		return (
			<div>
				<div>
					<h1 className={styles['heading']}>Create New Navigation</h1>
				</div>
				<div>
					<StartingLocation/>
				</div>
				<div>
					<EndingLocation/>
				</div>
				<div>
					<Link to='/commondestinations'><Button>Common Destinations</Button></Link><br/>
					<Link to='/search'><Button>Search</Button></Link> <br/> <br/>
					<Link to='/navigation'><Button>Start Navigation</Button></Link> <br/>
				</div>
				<div>
					<MainMenuButton/> <br/>
					<HelpButton link_to='/createnewnavigationhelp'/>
				</div>
			</div>
		)
	}
}

export default CreateNewNavigation
