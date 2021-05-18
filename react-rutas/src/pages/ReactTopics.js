import { Link, Route, Switch, useParams, useRouteMatch } from "react-router-dom";

const Topic = () => {
  let { topic } = useParams();

  return (
    <div>
      <h4>{topic}</h4>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta libero, mollitia beatae assumenda officia exercitationem molestiae voluptate numquam nihil reiciendis minus quod modi facilis aliquid ab rerum dolorem nostrum odio.</p>
    </div>
  );
};

const ReactTopics = () => {
  /* let match = useRouteMatch();
  console.log(match); */
  // 'path' nos permite contruir rutas relativas <Route>, mientras que que 'url' nos permite contruir enlaces relativos <Link> o <NavLink>

  let { url, path } = useRouteMatch();

  return (
    <div>
      <h3>Temas de React</h3>
      <ul>
        <li>
          <Link to={`${url}/jsx`}>JSX</Link>
        </li>
        <li>
          <Link to={`${url}/props`}>Props</Link>
        </li>
        <li>
          <Link to={`${url}/estado`}>Estado</Link>
        </li>
        <li>
          <Link to={`${url}/componentes`}>Componentes</Link>
        </li>
      </ul>

      <Switch>
        <Route exact path={path}>
          <h4>Elige un tema de react</h4>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe velit laudantium praesentium explicabo commodi at recusandae voluptates unde odio in autem, impedit excepturi quam placeat eveniet architecto nulla? Illo, assumenda.</p>
        </Route>
        <Route path={`${path}/:topic`} component={Topic} />
        {/* El componente Topic tendría que ser un componente independiente, pero para este ejercicio lo declararemos en este mismo archivo */}
      </Switch>
    </div>
  );
};

export default ReactTopics;
