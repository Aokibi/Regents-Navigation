import React from 'react'
import styles from './our-styles.less'
import MainMenuButton from './main-menu-button'

/* This renders the About page */
class About extends React.Component {
	render() {
		return (
			<div>
				<div>
					<h1 className={styles['heading']}>About</h1>
				</div>
				<div>
					<p className = {styles['about-text']}>
					This web application was designed and built in the Computer Science Capstone course
					in fall 2015. It was designed and built by Elinor Holm '16 and Kayla Bonnstetter '16. This
					application is meant to be an early prototype for a Regents Navigation application. </p>

					<p className = {styles['about-text']}> The application builds upon previous Capstone work, especially work done on the tile
					server in fall 2014. The designers would also like to thank our classmates for their design 
					input and Professor Hall-Holt for his guidance. The designers hope that the application is
					fun and easy to use.
					</p>
				</div>
				<div>
					<MainMenuButton link_to='/'/>
				</div>
			</div>
		)
	}
}

export default About