import Modal from "react-modal";
import "../page/Auth/Auth.css";

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

const ProfileModals = ({ opened, setOpened }) => {
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
        <form className="infoForm">
          <div>
            <input
              type="text"
              name="firstName"
              placeholder="Enter First Name"
              className="infoInput"
            />
            <input
              type="text"
              name="LastName"
              placeholder="Enter Last Name"
              className="infoInput"
            />
          </div>
          <div>
            <input
              type="text"
              name="worksAt"
              placeholder="Works At"
              className="infoInput"
            />
          </div>
          <div>
            <input
              type="text"
              name="livesIn"
              placeholder="Lives In"
              className="infoInput"
            />
            <input
              type="text"
              name="country"
              placeholder="Country"
              className="infoInput"
            />
          </div>
          <div>
            <input
              type="text"
              name="relationship"
              placeholder="Enter relationship Status"
              className="infoInput"
            />
          </div>
          <div>
          <label htmlFor="">Profile Picture</label>
          <input type="file" name="profilePicture" />
          <label htmlFor="">Cover Photo</label>
          <input type="file" name="coverPhoto" />
          </div>

        <button style={{ padding: "8px 12px",borderRadius:'5px' }} className="button">Update</button>


        </form>
      </Modal>
    </div>
  );
};

export default ProfileModals;
