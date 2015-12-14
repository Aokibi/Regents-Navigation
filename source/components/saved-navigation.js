import React, { PropTypes } from 'react'

/* The component that displays a saved route. */
class SavedNavigation extends React.Component {
	render() {
		return (
			<tr>
				<td>
				{this.props.startinglocation}
				</td>
				<td>
				{this.props.destination}
				</td>
			</tr>
			)
	}
}

SavedNavigation.propTypes = {
	destination: PropTypes.string.isRequired,
	startinglocation: PropTypes.string.isRequired,
}

export default SavedNavigation
