// Button.tsx
import React from 'react'
import styles from '../../../../css/Button.module.css'

interface ButtonProps {
	open: boolean
	setOpen: () => void
}

const Button: React.FC<ButtonProps> = ({ open, setOpen }) => {
	const handleClick = React.useCallback(() => {
		setOpen()
	}, [setOpen])

	return (
		<div className={styles.Button}>
			<div className={styles.btn} onClick={handleClick}>
				Карта
				<img
					src={open ? '/icons/arrow-up.svg' : '/icons/arrow-down.svg'}
					alt='open map'
				/>
			</div>
		</div>
	)
}

export default Button
