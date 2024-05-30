import React from 'react';
import Modal from 'react-modal';

// Custom styles for the modal
const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

// Bind modal to your appElement
Modal.setAppElement('#root'); // Change '#root' to your app element if different

const ProfileModals = () => {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  let subtitle;

  const openModal = () => {
    setIsOpen(true);
  };

  const afterOpenModal = () => {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#f00';
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <button onClick={openModal}>Open Modal</button>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hello</h2>
        <button onClick={closeModal}>Close</button>
        <div>I am a modal</div>
        <form>
          <input />
          <button>Tab Navigation</button>
          <button>Stays</button>
          <button>Inside</button>
          <button>The Modal</button>
        </form>
      </Modal>
    </div>
  );
};

export default ProfileModals;
