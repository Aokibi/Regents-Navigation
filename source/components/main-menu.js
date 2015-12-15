import React from 'react'
import {Link} from 'react-router'
import Button from './button'
import styles from './our-styles.less'

/* The main menu page. */
class MainMenu extends React.Component {
	render() {
		return (
			<div>
				<div>
				<h1 className ={styles['heading']}> Welcome to the St. Olaf Regents Navigation System</h1>
				</div>
				<div>
				<h3 className={styles['main-menu']}> Main Menu </h3>
				</div>
				<div>
				<Link to='/createnewnavigation'><Button>Start New Navigation</Button></Link><br/>
				<Link to='/savednavigationscreen'><Button>Start Saved Navigation</Button></Link><br/>
				<Link to='/settings'><Button>Settings</Button></Link><br/>
				<Link to='/mainmenuhelp'><Button>Help</Button></Link><br/>
				<Link to='/about'><Button>About</Button></Link><br/>
				</div>
			</div>
			)
	}
}

export default MainMenu