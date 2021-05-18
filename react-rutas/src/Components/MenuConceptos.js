import { Link, NavLink } from "react-router-dom";

const MenuConceptos = () => {
  return (
    <nav>
      <ol>
        <li>
          <span>Menú con enlaces html (no recomendado): </span>
          <a href="/">Home</a>
          <a href="/contacto">Contacto</a>
          <a href="/acerca">Acerca</a>
        </li>
        <li>
          <span>Componente Link: </span>
          <Link to="/">Home</Link>
          <Link to="/acerca">Acerca</Link>
          <Link to="/contacto">Contacto</Link>
          <Link to="/no-existe">No existe</Link>
        </li>
        <li>
          <span>Componente NavLink: </span>
          <NavLink exact to="/" activeClassName="active">
            Home
          </NavLink>
          <NavLink exact to="/acerca" activeClassName="active">
            Acerca
          </NavLink>
          <NavLink exact to="/contacto" activeClassName="active">
            Contacto
          </NavLink>
          <NavLink exact to="/no-existe" activeClassName="active">
            No existe
          </NavLink>
        </li>
        <li>
          <span>Parámetros: </span>
          <Link to="/usuario/jonmircha">jonmircha</Link>
          <Link to="/usuario/kenai">kEnAi</Link>
        </li>
        <li>
          <span>Parámetros de consulta: </span>
          <Link to="/productos">Productos</Link>
        </li>
        <li>
          <span>Rutas Anidadas: </span>
          <Link to="/react">React</Link>
        </li>
      </ol>
    </nav>
  );
};

export default MenuConceptos;
