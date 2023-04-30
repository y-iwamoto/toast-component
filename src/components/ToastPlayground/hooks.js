import { useContext, useEffect } from 'react';
import { ToastContext } from '../ToastProvider';

export function useToastPlayGround() {
  const {
    message,
    variant,
    handleChangeMessage,
    handleChangeVariant,
    onSubmitToast,
    handleAllCLoseToasts,
  } = useContext(ToastContext);

  useEffect(() => {
    function handleKeyDown(event) {
      if (event.keyCode === 27) {
        handleAllCLoseToasts();
      }
    }

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleAllCLoseToasts]);

  return {
    message,
    variant,
    handleChangeMessage,
    handleChangeVariant,
    onSubmitToast,
  }
}