import { Redirect, Route } from "react-router";

/* const PrivateRoute = (props) => {
  return <Route exact={props.exact} path={props.path} component={props.component} />;
}; */

/* const PrivateRoute = (props) => {
  return <Route {...props} />;
}; */

const PrivateRoute = ({ component: Component, ...rest }) => {
  return <Route {...rest}> {auth ? <Component /> : <Redirect to="/login" />} </Route>;
};

// Simular la autenticación

let auth;
auth = true;
auth = null;

export default PrivateRoute;
