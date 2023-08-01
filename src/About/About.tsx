import s from './About.module.scss'
import { useTranslation } from 'react-i18next';

const About = () => {

  const { t } = useTranslation(['home']);

  return (
    <div className={s.about}>
      <div className={s.aboutInfo}>
        <div className={s.infoText}>
        <h2>{t('aboutTitle')}</h2>
        <p>{t('aboutText1')}</p>
        <p>{t('aboutText2')}</p>
        </div>
        
        <div className={s.country}>
            <img src="/assets/img/pl.svg" alt="flag" />
            <p>{t('aboutText3')}</p>
        </div>
        <div className={s.country}>
            <img className={s.flag} src="/assets/img/cz.svg" alt="flag" />
            <p className={s.countryText}>{t('aboutText4')}</p>
        </div>

      </div>

      <div className={s.aboutReviews}>
        
        <div className={s.reviewsWrapper}>
          <div className={s.reviews}>
          <h4>{t('aboutReview1')}</h4>
          <img src="/assets/img/stars.svg" alt="rating" />
          <p>{t('aboutReview2')}</p>
          </div>
        </div>
        <img className={s.img} src="/assets/img/reviews.png" alt="reviews" />
      </div>
    </div>
  )
}

export default About
