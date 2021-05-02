import "./Modal.css";

const Modal = ({ children }) => {
  return (
    <article className="modal is-open">
      <div className="modal-caontainer">
        <button className="modal-close">X</button>
        {children}
      </div>
    </article>
  );
};

export default Modal;
