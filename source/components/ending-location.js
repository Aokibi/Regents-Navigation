import React from 'react'
import styles from './our-styles.less'

/* Ending location component */
class EndingLocation extends React.Component {
	render() {
		return (
			<form className={styles['ending-location']}>
				Enter your destination. <br/>
				<input type='text' name='endinglocation'/>
			</form>
		)
	}
}

export default EndingLocation
