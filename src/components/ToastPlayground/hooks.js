import { useContext } from 'react';
import { ToastContext } from '../ToastProvider';
import { useEscapeKey } from '../../hooks/useEscapeKey';

export function useToastPlayGround() {
  const {
    message,
    variant,
    handleChangeMessage,
    handleChangeVariant,
    onSubmitToast,
  } = useContext(ToastContext);

  useEscapeKey();

  return {
    message,
    variant,
    handleChangeMessage,
    handleChangeVariant,
    onSubmitToast,
  }
}
