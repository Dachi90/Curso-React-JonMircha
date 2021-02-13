import React, { Component } from "react";

// Componente funcional en funcion expresada.
const Componente = (props) => <h2>{props.msg}</h2>;

// Componente funcional en funcion declarada.
/* function Componente(props) {
  return <h2>{props.msg}</h2>;
} */

// Componente basdo en clase.
/* class Componente extends Component {
  render() {
    return <h2>{this.props.msg}</h2>;
  }
} */

export default Componente;
