import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Acerca from "../pages/Acerca";
import Contacto from "../pages/Contacto";

const ConceptosBasicos = () => {
  return (
    <div>
      <h2>Conceptos básicos</h2>
      <Router>
        <Switch>
          <Route exact path="/">
            <h3>Home</h3>
            <p>Bienvenidos al tema de las Rutas en React</p>
          </Route>
          <Route exact path="/acerca">
            <Acerca />
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos repellat dolorem voluptatem accusamus in, laborum et ab fugiat animi. Delectus, eum aliquam! Fugit quos rem amet ipsum in ea debitis.</p>
          </Route>
          {/* <Route exact path="/contacto" component={Contacto}/> */}
          <Route
            exact
            path="/contacto"
            children={
              <>
                {" "}
                <Contacto /> <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis autem, quisquam corporis soluta tempore veritatis. Aut nulla, animi amet necessitatibus, assumenda, ex accusantium perferendis ipsum molestias porro repellat quod a?</p>
              </>
            }
          ></Route>
        </Switch>
      </Router>
    </div>
  );
};

export default ConceptosBasicos;
