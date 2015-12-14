import React, { PropTypes } from 'react'

/* The component for displaying a result from a search. */
class SearchDestination extends React.Component {
	render() {
		return (
			<tr>
				<td>
				{this.props.name}
				</td>
				<td>
				</td>
			</tr>
			)
	}
}

SearchDestination.propTypes = {
	name: PropTypes.string.isRequired,
}

export default SearchDestination