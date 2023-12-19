import React from 'react';
import styles from '../style';

const Modal = ({ show, onClose }) => {
  const modalStyles = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: 'white',
    padding: '20px',
    zIndex: 9999,
    width: '90%',
    maxWidth: '850px',
    maxHeight: '80%',
    overflowY: 'auto',
    border: '1px solid #ccc',
    borderRadius: '8px',
  };

  const overlayStyles = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Adjust opacity as needed
    zIndex: 9998,
    display: show ? 'block' : 'none',
  };

  return (
    <>
      <div style={overlayStyles} onClick={onClose}></div>
      {show && (
        <div style={modalStyles}>
          <h2>Terms & Conditions</h2>
          {/* Your terms and conditions content here */}
          <p>This is where your terms and conditions will go.</p>
          <button onClick={onClose}>Close</button>
        </div>
      )}
    </>
  );
};

export default Modal;
