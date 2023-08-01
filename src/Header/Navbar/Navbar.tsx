import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';
import { ChangeEvent } from 'react';

import s from './Navbar.module.scss';

const Navbar = () => {
  const { i18n, t } = useTranslation(['home']);
  const [language, setLanguage] = useState<string | null>(localStorage.getItem('i18nextLng'));

  const handlerLanguageChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const selectedLanguage = e.target.value;
    setLanguage(selectedLanguage);
    i18n.changeLanguage(selectedLanguage);
  };

  useEffect(() => {
    const storedLanguage = localStorage.getItem('i18nextLng');
    if (storedLanguage && storedLanguage.length > 2) {
      setLanguage(storedLanguage);
      i18next.changeLanguage(storedLanguage);
    }
  }, []);

  return (
    <div className={s.navbar}>
      <div className={s.left}>
        <img src="/assets/img/logo.svg" alt="logotype" />
        <ul>
          <li>
            <a href="#">
              {t('actualVacancies')}
            </a>
          </li>
          <li>
            <a href="#">
            {t('aboutUs')}
            </a>
          </li>
          <li>
            <a href="#">
            {t('centralOffice')}
            </a>
          </li>
          <li>
            <a href="#">
            {t('contacts')}
            </a>
          </li>
        </ul>
      </div>

      <div className={s.right}>
        <a>{t('findJob')}</a>
        <select value={language || ''} onChange={handlerLanguageChange}>
          <option value="ua">UA</option>
          <option value="en">EN</option>
          <option value="pl">PL</option>
          <option value="cz">CZ</option>
          <option value="sk">SK</option>
        </select>
        <img src="/assets/img/arrow.svg" alt="drop arrow" />
      </div>
    </div>
  );
};

export default Navbar;
