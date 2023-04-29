import React from 'react';

import Button from '../Button';

import styles from './ToastPlayground.module.css';
import { useToastPlayGround, VARIANT_OPTIONS } from './hooks';
import ToastShelf from '../ToastShelf';

function ToastPlayground() {
  const {
    message,
    variant,
    toastList,
    handleChangeMessage,
    handleChangeVariant,
    onClickOpenToast,
    onClickCloseToast
  } = useToastPlayGround();

  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>

      <ToastShelf toastList={toastList} onClickCloseToast={onClickCloseToast} />

      <form onSubmit={onClickOpenToast} className={styles.controlsWrapper}>
        <div className={styles.row}>
          <label
            htmlFor="message"
            className={styles.label}
            style={{ alignSelf: 'baseline' }}
          >
            Message
          </label>
          <div className={styles.inputWrapper}>
            <textarea id="message" className={styles.messageInput} value={message} onChange={handleChangeMessage} />
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label}>Variant</div>
          <div
            className={`${styles.inputWrapper} ${styles.radioWrapper}`}
          >

            {VARIANT_OPTIONS.map((v) => (
              <label key={v} htmlFor={`variant-${v}`}>
                <input
                  id={`variant-${v}`}
                  type="radio"
                  name="variant"
                  value={v}
                  onChange={handleChangeVariant}
                  checked={variant === v}
                />
                {v}</label>
            ))}
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label} />
          <div
            className={`${styles.inputWrapper} ${styles.radioWrapper}`}
          >
            <Button>Pop Toast!</Button>
          </div>
        </div>
      </form>
    </div >
  );
}

export default ToastPlayground;
