import React, { useState } from 'react'
import Map from '../Map/Map'
import Button from '../shared/ui/Button/Button'
import cls from '../../css/Card.module.css'

interface CardProps {
	country: string
	address: string
	lat: number
	lng: number
}

const Card: React.FC<CardProps> = ({ country, address, lat, lng }) => {
	const [mapOpen, setMapOpen] = useState<boolean>(false)

	const toggleMapOpen = () => {
		setMapOpen(prev => !prev)
	}

	return (
		<div className={cls.cardItem}>
			<div className={cls.cardWrapper}>
				<div className={cls.itemCountry}>{country}</div>
				<div className={cls.itemLocation}>
					<ul>
						<li>Адреса: {address}</li>
					</ul>
				</div>
				<div className={cls.itemFooter}>
					<Button open={mapOpen} setOpen={toggleMapOpen} />
				</div>
			</div>
			<div className={cls.itemMap}>
				{mapOpen && <Map lat={lat} lng={lng} />}
			</div>
		</div>
	)
}

export default Card
