import s from './About.module.css'
import { useTranslation } from 'react-i18next';

const About = () => {

  const { t } = useTranslation(['home']);

  return (
    <div className={s.about}>
      <div className={s.aboutInfo}>
        <div className={s.infoText}>
        <h2 className={s.title}>{t('aboutTitle')}</h2>
        <p className={s.text}>{t('aboutText1')}</p>
        <p className={s.text}>{t('aboutText2')}</p>
        </div>
        
        <div className={s.country}>
            <img className={s.flag} src="/assets/img/pl.svg" alt="flag" />
            <p className={s.countryText}>{t('aboutText3')}</p>
        </div>
        <div className={s.country}>
            <img className={s.flag} src="/assets/img/cz.svg" alt="flag" />
            <p className={s.countryText}>{t('aboutText4')}</p>
        </div>

      </div>

      <div className={s.aboutReviews}>
        <img className={s.img} src="/assets/img/reviews.png" alt="reviews" />
      </div>
    </div>
  )
}

export default About
