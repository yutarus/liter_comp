import { useTranslation } from 'react-i18next';
import s from './Info.module.scss';

const Info = () => {

  const { t } = useTranslation(['home']);

  return (
    <div className={s.info}>
      <h2>{t('infoTitle')}</h2>
      <div className={s.infoWrapper}>
        <div className={s.infoItem}>
          <img src="/assets/img/1.png" alt="photo" />
          <p>{t('infoText1')}</p>
        </div>
        <div className={s.infoItem}>
          <img className={s.image} src="/assets/img/2.png" alt="photo" />
          <p className={s.text}>{t('infoText2')}</p>
        </div>
        <div className={s.infoItem}>
          <img className={s.image} src="/assets/img/3.png" alt="photo" />
          <p className={s.text}>{t('infoText3')}</p>
        </div>
      </div>
    </div>
  );
  
};

export default Info;
