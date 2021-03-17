import React from "react";
import styled from "styled-components";

export default function ComponentesEstilizados() {
  let mainColor = "#db7093",
    mainAlphaColor80 = "db709380";

  const MyH3 = styled.h3`
    padding: 2rem;
    color: ${(props) => props.color};
    text-align: center;
    background-color: ${mainColor};
  `;
  return (
    <>
      <h2>Styled-Components</h2>
      <MyH3>Hola soy un h3 estilizado con styled-components</MyH3>
      <MyH3 color="#61dafb">Hola soy un h3 estilizado con styled-components</MyH3>
    </>
  );
}
