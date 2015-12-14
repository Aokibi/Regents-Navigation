import React from 'react'
import styles from './our-styles.less'

/* A button that will display as a circle. */
class RoundButton extends React.Component {
	render() {
		return (
			<button className={styles['round-button']}>
				{this.props.children}
			</button>
		)
	}
}

export default RoundButton
