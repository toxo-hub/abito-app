import { Link } from 'react-router-dom';
import './Header.css'
import { deployPrefix } from '../../constants'

export const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header-box">
          <Link to={ deployPrefix } className="header-logo">
            <img src="/images/logo.svg" alt="Logo" />
            <span>Abito</span>
          </Link>
          <div className="header-controls">
            <button className="btn btn-outline">Вход и регистрация</button>
            <button className="btn btn-primary">Подать объявление</button>
          </div>
          <div className="header-burger">
            <img src="/images/burger.svg" alt="burger" />
          </div>
        </div>
      </div>
    </header>
  );
};
