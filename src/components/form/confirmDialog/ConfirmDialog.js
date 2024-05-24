// src/components/layout/confirmDialog/ConfirmDialog.js
import React from 'react';
import styles from './ConfirmDialog.module.css';

function ConfirmDialog({ message, onConfirm, onCancel }) {
  return (
    <div className={styles.dialog_overlay}>
      <div className={styles.dialog}>
        <p>Are you sure you want to delete this project?</p>
        <div className={styles.dialog_buttons}>
          <button className={styles.confirm} onClick={onConfirm}>Yes</button>
          <button className={styles.cancel} onClick={onCancel}>No</button>
        </div>
      </div>
    </div>
  );
}

export default ConfirmDialog;
