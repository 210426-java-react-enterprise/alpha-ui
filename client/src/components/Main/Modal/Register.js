import { Modal } from "react-bootstrap";
import Register from "../../Register";

const RegisterModal = ({ showRegister, setShowRegister }) => {
  const handleClose = () => setShowRegister(false);
  return (
    <Modal show={showRegister} onHide={handleClose}>
      <Register handleClose={handleClose} />
    </Modal>
  );
};

export default RegisterModal;
