import ToggleSwitch from "./ToggleSwitch";

const Header = () => {
  return (
    <header className="header">
      <p className="logo">calc</p>
      <div className="header__right">
        <span className="theme__text">THEME</span>
        <ToggleSwitch />
      </div>
    </header>
  );
};

export default Header;
