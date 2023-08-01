import s from './Header.module.scss'
import Navbar from './Navbar/Navbar'


const Header = () => {
  return (
    <div className={s.header}>
      <Navbar />
      <img className={s.logo} src='/assets/img/mainLogo.png' alt="logotype" />
    </div>
  )
}

export default Header
