import React from 'react';

import Toast from '../Toast';
import styles from './ToastShelf.module.css';
import { useToastShelf } from './hooks';

function ToastShelf() {
  const {
    toastList,
  } = useToastShelf();
  return (
    <ol className={styles.wrapper}>
      {toastList.map((toast) => (
        <li key={toast.id} className={styles.toastWrapper}>
          <Toast variant={toast.variant} message={toast.message} id={toast.id} />
        </li>
      ))}
    </ol>
  );
}

export default ToastShelf;
