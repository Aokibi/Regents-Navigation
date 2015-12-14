import React from 'react'
import styles from './our-styles.less'

/* Form for entering which location to start the route. */
class StartingLocation extends React.Component {
	render() {
		return (
			<div>
				<div>
				<form className={styles['starting-location']}>
					Enter your starting location. <br/>
					<input type='text' name='startinglocation'/>
				</form>
				</div>
				<div>
				<h6 className={styles['starting-location']}> Default is your current location. </h6>
				</div>
			</div>
			)
	}
}

export default StartingLocation