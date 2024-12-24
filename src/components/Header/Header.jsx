import './Header.css'

export const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header-box">
          <a href="/abito/" className="header-logo">
            <img src="/images/logo.svg" alt="Logo" />
            <span>Abito</span>
          </a>
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
