import { NavLink } from 'react-router-dom';
import s from './Header.module.scss'


const Header = (props) => {
 
  const unLogin = () => {
    props.unlogin()
  }
    return (
      <header className={s.header}>
        <img alt='label' src='https://static.ucraft.net/fs/ucraft/userFiles/version6/images/20454-logo-maker-16751766807967.webp' />
          <div className={s.loginBlock}>
            { props.isAuth ? props.login : <NavLink to={'/login'}>login</NavLink>}
           </div>
          { props.isAuth &&


            <div>
              <button onClick={unLogin}>
                Вийти нахрен
              </button>
            </div>
          }
       
      </header>
    )
};

export default Header;