import React from 'react';
import Styles from './modal.module.css'; 

const Modal = ({ show, onClose, children }) => {
  if (!show) {
    return null; 
  }

  return (
    <div className={Styles.modalBackdrop}>
      <div className={Styles.modalContent}>
        <div className={Styles.modalHeader}>
        </div>
        <div className={Styles.modalBody}>
        <button className={Styles.closeIcon} onClick={onClose}>&times;</button>
          {children}
        </div>
        <button className={Styles.closeButton} onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default Modal;
