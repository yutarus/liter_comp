import { IVacancy } from './models'

interface VacacyProps {
	vacancy: IVacancy
}

function VacancyItem({ vacancy }: VacacyProps) {
	return (
		<div id={'card_' + vacancy.id} className='vacancy__item'>
			<div
				className='item__image'
				style={{
					backgroundImage: `url(${vacancy.imagePath})`
				}}
			>
				<div className='image__logo'>
					<div
						className='logo__svg'
						style={{
							backgroundImage: `url(${vacancy.logoPath})`
						}}
					></div>
				</div>
			</div>
			<p className='item__title'>{vacancy.title}</p>
			<ul className='items__terms manropeFont'>
				<li>{vacancy.salary}</li>
				<li>{vacancy.amountWork}</li>
				<li>{vacancy.place}</li>
			</ul>
			<button className='item__btn button__font manropeFont'>
				Побачити більше
			</button>
		</div>
	)
}

export default VacancyItem
