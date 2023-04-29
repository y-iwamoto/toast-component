import React from 'react';

import Toast from '../Toast';
import styles from './ToastShelf.module.css';

function ToastShelf({ toastList, onClickCloseToast }) {
  return (
    <ol className={styles.wrapper}>
      {toastList.map((toast) => (
        <li key={toast.id} className={styles.toastWrapper}>
          <Toast variant={toast.variant} message={toast.message} id={toast.id} onClickCloseToast={onClickCloseToast} />
        </li>
      ))}
    </ol>
  );
}

export default ToastShelf;
