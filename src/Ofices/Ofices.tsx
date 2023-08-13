import React from 'react'
import styles from '../../css/Ofices.module.css'
import CardWrapper from '../CardWrapper/CardWrapper'

const Ofices: React.FC = () => (
	<div className={styles.oficesBox}>
		<div className={styles.title}>Центральні офіси по країнам</div>
		<div>
			<CardWrapper />
		</div>
	</div>
)

export default Ofices
