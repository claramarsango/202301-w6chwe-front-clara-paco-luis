import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="header-container">
      <Link to="/" className="header__link">
        <img
          src="assets/robot-logo.png"
          alt="robot logo"
          className="header__logo"
        />
        <h1 className="header__title">PLC Robotics</h1>
      </Link>
    </header>
  );
};

export default Header;
