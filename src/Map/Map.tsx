import React, { useMemo } from 'react'
import styles from '../../css/Map.module.css'
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api'

interface MapProps {
	lat: number
	lng: number
}

const Map: React.FC<MapProps> = ({ lat, lng }) => {
	const center = useMemo(() => ({ lat, lng }), [])
	const { isLoaded, loadError } = useLoadScript({
		googleMapsApiKey: 'AIzaSyDouEZWQsndQY2L8rThXDZLxjLYGADajyo'
	})

	if (loadError) {
		return <div>Error loading map</div>
	}

	if (!isLoaded) {
		return <div>Loading map...</div>
	}

	return (
		<div className={styles.Map}>
			<GoogleMap mapContainerClassName={styles.box} center={center} zoom={16}>
				<Marker position={center} />
			</GoogleMap>
		</div>
	)
}

export default Map
