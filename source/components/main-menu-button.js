import React from 'react'
import {Link} from 'react-router'
import RoundButton from './round-button'

class MainMenuButton extends React.Component {
	render() {
		return (
			<RoundButton><Link to='/'>🏠</Link></RoundButton>
			)
	}
}

export default MainMenuButton