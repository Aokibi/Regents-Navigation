import React from 'react'

//import styles from './button.less'

class Button extends React.Component {
	render() {
		return (
			<button className='button'>
				{this.props.children}
			</button>
		)
	}
}
export default Button