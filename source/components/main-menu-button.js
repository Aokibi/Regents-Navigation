import React from 'react'
import {Link} from 'react-router'
import RoundButton from './round-button'
import Icon from './icon'

/* Button for navigating to the app's main menu */
class MainMenuButton extends React.Component {
	render() {
		return (
			<Link to='/'><RoundButton><Icon name='ionicon-home' type='inline'/></RoundButton></Link>
		)
	}
}

export default MainMenuButton
