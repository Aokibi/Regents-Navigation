import React from 'react'
import NavigationMap from './navigation-map'
import FloorMap from './floor-map'

/* Area for rendering the 3D model and 2D floor map. */
class NavigationArea extends React.Component {
	render() {
		return(
			<div>
				<NavigationMap/>
				<FloorMap/>
			</div>
			)
	}
}

export default NavigationArea