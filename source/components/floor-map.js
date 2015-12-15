import React, { PropTypes } from 'react'
import {connect} from 'react-redux'

/* Displays the 2D floor map. 
   Currently not implemented */
class FloorMap extends React.Component {
	static propTypes ={
		floor: PropTypes.string.isRequired,
	}
	render() {
		return(
			<div>
				<select value={this.props.optionsState}>
					<option value='floor_1'>Floor 1</option>
					<option value='floor_1-5'>Floor 1.5</option>
					<option value='floor_2'>Floor 2</option>
					<option value='floor_3'>Floor 3</option>
					<option value='floor_4'>Floor 4</option>
				</select>
				<img src={'/images/map_{this.props.floor}.png'} alt='Map of current floor of Regents Hall of Sciences' />
			</div>
			)
	}
}

function mapStateToProps(optionsState) {
	return {
		floor: optionsState,
	}
}

export default connect(mapStateToProps)(FloorMap)