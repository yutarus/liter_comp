import VacancyItem from './VacancyItem'
import { vacancies } from './vacancies.data'
import './css/secondBlock.css'
import './css/vacansyItem.css'

export function SecondBlock() {
	return (
		<div className='secondBlock__container'>
			<div className='vacancies__container'>
				<h3 className='vacancyTitle title manropeFont'>Актуальні вакансії</h3>
				<div className='vacancies__items'>
					{vacancies.length ? (
						vacancies.map(vacancy => (
							<VacancyItem key={vacancy.id} vacancy={vacancy} />
						))
					) : (
						<p className='text'>Вакансій немає :(</p>
					)}
				</div>
			</div>
			<div className='work__container'>
				<h3 className='vacancyTitle title manropeFont'>Де ми працюємо</h3>
				<div className='table__container'>
					<div className='table'></div>
					<div className='comp__info'>
						<h3 className='title manropeFont title__marginNone'>
							Компанія LINTAR Group працює:
						</h3>
						<p className='info__text workers__text manropeFont'>
							У нас є <span>50%</span> працівників у Чехії; <span>40%</span>{' '}
							працівників у Словаччині; <span>10% </span>
							працівників у Польщі.
						</p>
						<p className='info__text targets__text manropeFont'>
							Ми зосереджені не тільки на секторі автомобільного виробництва,
							наприклад, електротехніка, медичне обладнання, харчова
							промисловість або логістика.
						</p>
					</div>
				</div>
			</div>
			<div className='form__container'>
				<form className='form' action=''>
					<p className='form__title form__text manropeFont title__marginNone'>
						Зв'яжіться з нами
					</p>
					<p className='form__info form__text manropeFont'>
						Понад 5000 талановитих людей, вже зв'язалися з нами
					</p>
					<div className='inputs manropeFont'>
						<input placeholder="Ваше ім'я" type='text' />
						<input placeholder='Введіть свій робочий email' type='text' />
					</div>
					<button className='form__btn button__font pointer'>Відправити</button>
				</form>
			</div>
		</div>
	)
}

export default SecondBlock
