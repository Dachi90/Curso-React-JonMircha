import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";
import LanguageContext from "../context/LanguageContext";
import SessionContext from "../context/SessionContext";

const HeaderContext = () => {
  const { theme, handleTheme } = useContext(ThemeContext);
  const { texts, handleLanguage } = useContext(LanguageContext);
  const { auth, handleAuth } = useContext(SessionContext);
  return (
    <header className={theme}>
      <h2>{texts.headerTitle}</h2>
      <h3>{texts.headerSubtitle}</h3>
      <select name="language" onChange={handleLanguage}>
        <option value="es">ES</option>
        <option value="en">EN</option>
      </select>
      <input type="radio" name="theme" id="light-context" onClick={handleTheme} value="light" />
      <label htmlFor="ligth-context">{texts.headerLight}</label>
      <input type="radio" name="theme" id="dark-context" onClick={handleTheme} value="dark" />
      <label htmlFor="dark-context">{texts.headerDark}</label>
      <button onClick={handleAuth}>{auth ? texts.buttonLogout : texts.buttonLogin}</button>
    </header>
  );
};

export default HeaderContext;
