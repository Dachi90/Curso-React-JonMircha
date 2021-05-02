import React from "react";
import Modal from "./Modal";

const Modals = () => {
  return (
    <div>
      <h2>Modales</h2>
      <button>Modal 1</button>
      <Modal>
        <h3>Modal 1</h3>
        <p>Hola este es el contenido de mi modal 1</p>
        <img src="https://placeimg.com/400/400/animals" alt="Animal" />
      </Modal>
      <button>Modal 2</button>
      <Modal>
        <h3>Modal 2</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste commodi nemo debitis voluptatum iusto ut saepe asperiores! Eaque natus quas veritatis neque odit cum. Tempora tempore quisquam soluta nulla iure?</p>
        <img src="https://placeimg.com/400/400/nature" alt="nature" />
      </Modal>
    </div>
  );
};

export default Modals;
