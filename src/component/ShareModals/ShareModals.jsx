import Modal from "react-modal";
import "../page/Auth/Auth.css";
import PostShare from "../postShare/PostShare";

// Custom styles for the modal
const customStyles = {
  content: {
    top: "40%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};
Modal.setAppElement("#root");

const ShareModals = ({ opened, setOpened }) => {
  const closeModal = () => {
    setOpened(false);
  };

  return (
    <div>
      <Modal
        isOpen={opened}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <button onClick={closeModal}>Close</button>
        <h2 style={{ textAlign:"center" }}>Your Info</h2>
       <PostShare/>
      </Modal>
    </div>
  );
};

export default ShareModals;
