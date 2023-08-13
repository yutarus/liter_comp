import React from 'react'
import styles from '../../css/Footer.module.css'

const Footer: React.FC = () => (
	<div className={styles.Footer}>
		<div className={styles.container}>
			<div className={styles.footerBox}>
				<div className={styles.socialBox}>
					<div className={styles.boxTitle}>
						<div className={styles.socialsLogo}>
							<img src={'/footer/socialMedia/logo.svg'} alt='Logo' />
						</div>
					</div>
					<div className={styles.boxSocials}>
						<a href='#'>
							<img
								className={styles.socialsItem}
								src={'/footer/socialMedia/facebook.svg'}
								alt='facebook'
							/>
						</a>
						<a href='#'>
							<img
								className={styles.socialsItem}
								src={'/footer/socialMedia/instagram.svg'}
								alt='instagram'
							/>
						</a>
						<a href='#'>
							<img
								className={styles.socialsItem}
								src={'/footer/socialMedia/telegram.svg'}
								alt='telegram'
							/>
						</a>
					</div>
				</div>
				<div className={styles.navigationBox}>
					<div className={`${styles.boxTitle} ${styles.title}`}>Навігація</div>
					<div className={styles.boxItems}>
						<div className={`${styles.navigationItem} item`}>
							<a href='#'> Актуальні вакансії</a>
						</div>
						<div className={`${styles.navigationItem} item`}>
							<a href='#'>Про нас</a>
						</div>
						<div className={`${styles.navigationItem} item`}>
							<a href='3'>Центральний офіс</a>
						</div>
						<div className={`${styles.navigationItem} item`}>
							<a href='#'>Контакти</a>
						</div>
					</div>
				</div>
				<div className={styles.jobBox}>
					<div className={`${styles.boxTitle} ${styles.title}`}>
						Робота в Європі
					</div>
					<div className={styles.boxItems}>
						<div className={`${styles.jobItem} item`}>
							<img
								className={styles.flag}
								src={'/footer/flags/🇵🇱.svg'}
								alt='pl'
							/>
							<a href='#'>Робота в Польщі</a>
						</div>
						<div className={`${styles.jobItem} item`}>
							<img
								className={styles.flag}
								src={'/footer/flags/🇨🇿.svg'}
								alt='cz'
							/>
							<a href='#'>Робота в Чехії</a>
						</div>
						<div className={`${styles.jobItem} item`}>
							<img
								className={styles.flag}
								src={'/footer/flags/🇸🇰.svg'}
								alt='sk'
							/>
							<a href='#'>Робота в Словаччині</a>
						</div>
					</div>
				</div>
				<div className={styles.contactsBox}>
					<div className={`${styles.boxTitle} ${styles.title}`}>Контакти</div>
					<div className={styles.boxItems}>
						<div className={`${styles.contactsItem} item`}>
							<img src={'/footer/socialMedia/call.svg'} alt='call' />
							+48790562034
						</div>
						<div className={`${styles.contactsItem} item`}>
							<img src={'/footer/socialMedia/email.svg'} alt='email' />
							polandlintar@gmail.com
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
)

export default Footer
