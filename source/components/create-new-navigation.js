import React from 'react'
import StartingLocation from './starting-location'
import EndingLocation from './ending-location'
import Button from './button'
import styles from './create-new-navigation.less'

class CreateNewNavigation extends React.Component {
	render() {
		return (
			<div>
				<div>
				<h1 className={styles['create-new-navigation']}>Create New Navigation</h1>
				</div>
				<div>
				<StartingLocation/>
				</div>
				<div>
				<EndingLocation/>
				</div>
				<div>
				<Button>Common Destinations</Button> <br/>
				<Button>Search</Button> <br/>
				</div>
			</div>
			)
	}
}

export default CreateNewNavigation