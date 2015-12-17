import React from 'react'
import styles from './our-styles.less'

/* Displays room category options */
class CategoriesBar extends React.Component {
	render() {
		return(
			<div>
				<button className={styles['category']}>All</button>
				<button className={styles['category']}>Classrooms</button>
				<button className={styles['category']}>Labs</button>
				<button className={styles['category']}>Offices</button>
				<button className={styles['category']}>Restricted</button><hr/>
			</div>
			)
	}
}

export default CategoriesBar