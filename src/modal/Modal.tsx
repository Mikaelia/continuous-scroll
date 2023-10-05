import "./Modal.css";

interface Props {
  closeModal: () => void;
  modalData: { logo: string; title: string; description: string };
}

function Modal({ closeModal, modalData }: Props) {
  return (
    <div className="modal__overlay">
      <div className="modal">
        <img className="modal__logo" src={modalData.logo} alt="Logo" />
        <button className="modal__close-button" onClick={closeModal}>
          <img
            src="/icons/close.svg"
            alt="Close"
            className="modal__close-icon"
          />
        </button>
        <div className="modal__text-content">
          <h2 className="modal__title">{modalData.title}</h2>
          <p className="modal__description">{modalData.description}</p>
        </div>
      </div>
    </div>
  );
}

export default Modal;
