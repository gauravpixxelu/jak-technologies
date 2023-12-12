import Modal from 'react-modal';

interface PopupFormProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

const PopupForm: React.FC<PopupFormProps> = ({ isOpen, onRequestClose }) => {
  return (
    <>
      <Modal
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        contentLabel="Example Modal"
      >

        <button className="closed-butt" onClick={onRequestClose}>+</button>
        <div className="form-design-code">
          <div className="light-code">
            <h3>Contact Us</h3>
          </div>
          <form action="#" method="post">
            <label className="name">Name:</label>
            <input type="text" id="name" name="name" required />

            <label className="email">Email:</label>
            <input type="email" id="email" name="email" required />

            <label className="phone">Phone Number:</label>
            <input type="tel" id="phone" name="phone" required />

            <label className="message">Message:</label>
            <textarea id="message" name="message" required ></textarea>

            <button className="custom-btn2" type="submit"><span>Submit</span></button>
          </form>
        </div>

      </Modal>
    </>
  );
};

export default PopupForm;