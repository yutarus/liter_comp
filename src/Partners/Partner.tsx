import React from 'react'
import styles from '../../css/Partners.module.css'
import Slider from '../Slider/Slider'
import { svg } from '../db/mock'

interface SvgData {
	path: string
}

const Partners: React.FC = () => (
	<div className={styles.Partners}>
		<Slider svg={svg as SvgData[]} />{' '}
	</div>
)

export default Partners
