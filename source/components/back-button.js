import React from 'react'
import {Link} from 'react-router'
import RoundButton from './round-button'
import Icon from './icon'

/* Button for returning to the previous page as specified by link_to */
class BackButton extends React.Component {
	render() {
		return (
			<Link to={this.props.link_to}><RoundButton><Icon name='ionicon-arrow-left-c' type='inline'/></RoundButton></Link>
		)
	}
}

export default BackButton
