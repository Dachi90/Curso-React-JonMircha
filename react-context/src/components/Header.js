const Header = ({ theme, handleTheme }) => {
  return (
    <header className={theme}>
      <h2>Mi aplicación sin Context</h2>
      <h3>Mi cabecera</h3>
      <select name="language">
        <option value="es">ES</option>
        <option value="en">EN</option>
      </select>
      <input type="radio" name="theme" id="light" onClick={handleTheme} value="light" />
      <label htmlFor="ligth">Claro</label>
      <input type="radio" name="theme" id="dark" onClick={handleTheme} value="dark" />
      <label htmlFor="dark">Oscuro</label>
      <button>Iniciar Sesión</button>
    </header>
  );
};

export default Header;