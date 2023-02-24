import "./Header.css";

const Header = () => {
  return (
    <header className="header-container">
      <img
        src="assets/robot-logo.png"
        alt="robot logo"
        className="header__logo"
      />
      <h1 className="header__title">PLC Robotics</h1>
    </header>
  );
};

export default Header;
