import React from 'react'
import styles from './our-styles.less'

/* Displays the 2D floor map. 
   Currently not fully implemented -- want to have a dropdown or something similar */
class FloorMap extends React.Component {
	render() {
		return(
			<div>
				<p className={styles['floor-text']}> Floor 1 </p>
				<img src={'/images/map_floor_1.png'} alt='Map of current floor of Regents Hall of Sciences' /><br/>
				<p className={styles['floor-text']}> Floor 1.5 </p>
				<img src={'/images/map_floor_1-5.png'} alt='Map of current floor of Regents Hall of Sciences' /><br/>
				<p className={styles['floor-text']}> Floor 2 </p>					
				<img src={'/images/map_floor_2.png'} alt='Map of current floor of Regents Hall of Sciences' /><br/>
				<p className={styles['floor-text']}> Floor 3 </p>
				<img src={'/images/map_floor_3.png'} alt='Map of current floor of Regents Hall of Sciences' /><br/>
				<p className={styles['floor-text']}> Floor 4 </p>
				<img src={'/images/map_floor_4.png'} alt='Map of current floor of Regents Hall of Sciences' />								
			</div>
			)
	}
}

export default FloorMap