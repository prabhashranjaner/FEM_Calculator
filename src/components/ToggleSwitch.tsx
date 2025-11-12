import useLocalStorage from "../hooks/useLocalStorage";

const ToggleSwitch = () => {
  const [currentTheme, setCurrentTheme] = useLocalStorage("calculator-theme");

  function handleClick(newTheme: string) {
    if (newTheme === currentTheme) return;
    setCurrentTheme(newTheme);
  }

  return (
    <label className="toggle">
      {/* Label */}
      <div className="toggle__label">
        <span>1</span>
        <span>2</span>
        <span>3</span>
      </div>
      <input type="checkbox" />
      <span
        className={`toggle__switch ${
          currentTheme === "1"
            ? "left"
            : currentTheme === "2"
            ? "center"
            : "right"
        }`}
      ></span>
      <span className="toggle__Section" onClick={() => handleClick("1")}></span>
      <span className="toggle__Section" onClick={() => handleClick("2")}></span>
      <span className="toggle__Section" onClick={() => handleClick("3")}></span>
    </label>
  );
};

export default ToggleSwitch;
