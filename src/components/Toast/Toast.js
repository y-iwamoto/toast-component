import React from 'react';
import {
  X,
} from 'react-feather';

import VisuallyHidden from '../VisuallyHidden';

import styles from './Toast.module.css';
import { useToast } from './hooks';

function Toast({ message, variant, id }) {
  const {
    Icon,
    iconStyle,
    onClickCloseToast
  } = useToast({ variant });
  return (
    <div className={`${styles.toast} ${iconStyle}`}>
      <div className={styles.iconContainer}>
        <Icon size={24} />
      </div>
      <p className={styles.content}>
        <VisuallyHidden>{variant} -</VisuallyHidden>
        {message}
      </p>
      <button className={styles.closeButton}
        onClick={(event) => onClickCloseToast(event, id)}
        aria-label="Dismiss message"
        aria-live="off"
      >
        <X size={24} />
      </button>
    </div>
  );
}

export default Toast;
