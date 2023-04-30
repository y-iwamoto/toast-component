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
        {message}
      </p>
      <button className={styles.closeButton} onClick={(event) => onClickCloseToast(event, id)}>
        <X size={24} />
        <VisuallyHidden>Dismiss message</VisuallyHidden>
      </button>
    </div>
  );
}

export default Toast;
