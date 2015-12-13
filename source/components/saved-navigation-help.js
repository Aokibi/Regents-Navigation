import React from 'react'
import styles from './our-styles.less'
import BackButton from './back-button'

class SavedNavigationHelp extends React.Component {
	render() {
		return (
			<div>
				<div>
					<h1 className={styles['heading']}>Saved Navigation Help</h1>
					<h2 className={styles['help-header']}> What is each row in the table? </h2>
						<p className={styles['help-text']}> Each row in the table is a route that you have saved. If you have not saved any routes, then the table is empty. </p>
					<h2 className={styles['help-header']}> How do I select a route? </h2>
						<p className={styles['help-text']}> Select a route by clicking somewhere in the table row that route is in. </p>
				</div>
				<div>
					<BackButton link_to='/savednavigationscreen'/>
				</div>
			</div>
		)
	}
}

export default SavedNavigationHelp