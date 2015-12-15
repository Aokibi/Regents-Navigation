import React from 'react'
import {Link} from 'react-router'
import RoundButton from './round-button'
import Icon from './icon'

/* Links to the help page specified by link_to. */
class HelpButton extends React.Component {
	render() {
		return (
			<Link to={this.props.link_to}><RoundButton><Icon name='ionicon-help' type='inline'/></RoundButton></Link>
		)
	}
}

export default HelpButton
