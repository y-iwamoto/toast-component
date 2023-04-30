import { useContext } from 'react';
import { ToastContext } from '../ToastProvider';

export function useToastPlayGround() {
  const {
    message,
    variant,
    handleChangeMessage,
    handleChangeVariant,
    onSubmitToast,
  } = useContext(ToastContext);

  return {
    message,
    variant,
    handleChangeMessage,
    handleChangeVariant,
    onSubmitToast,
  }
}