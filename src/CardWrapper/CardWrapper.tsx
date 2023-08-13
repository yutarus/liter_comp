import React from 'react'
import styles from '../../css/CardWrapper.module.css'
import { offices } from '../db/db.tsx'
import Card from '../Card/Card'

const CardWrapper: React.FC = () => (
	<div className={styles.cardBox}>
		{offices.map(el => (
			<div className={styles.cardBox_container}>
				<Card
					key={el.id}
					address={el.address}
					country={el.country}
					lat={el.location.lat}
					lng={el.location.lng}
				/>
			</div>
		))}
	</div>
)

export default CardWrapper
